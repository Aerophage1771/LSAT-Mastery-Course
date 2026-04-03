-- DataToolkit course platform schema
-- Apply in the operator-side Supabase project used by the Course Studio server.

create table if not exists public.course_tracks (
  id text primary key,
  key text not null unique,
  title text not null,
  description text not null,
  route text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_modules (
  id text primary key,
  track_key text not null references public.course_tracks(id) on delete cascade,
  route_module_id integer not null,
  source_module_id integer not null,
  title text not null,
  category text not null,
  unit text not null,
  description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists course_modules_track_route_module_idx
  on public.course_modules (track_key, route_module_id);

create table if not exists public.course_lessons (
  id text primary key,
  lesson_key text not null,
  module_id text not null references public.course_modules(id) on delete cascade,
  track_key text not null references public.course_tracks(id) on delete cascade,
  route_module_id integer not null,
  source_module_id integer not null,
  source_route_path text not null,
  title text not null,
  sort_order integer not null default 0,
  body_kind text not null check (body_kind in ('markdown', 'blocks')),
  content jsonb not null,
  question_policy text null check (question_policy in ('none', 'repository_required')),
  latest_version_number integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists course_lessons_module_lesson_key_idx
  on public.course_lessons (module_id, lesson_key);

create table if not exists public.course_materials (
  id text primary key,
  lesson_id text not null references public.course_lessons(id) on delete cascade,
  title text not null,
  type text not null check (type in ('text', 'question_ref', 'passage_ref', 'link')),
  content text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists course_materials_lesson_idx
  on public.course_materials (lesson_id, sort_order);

create table if not exists public.course_lesson_versions (
  id uuid primary key,
  lesson_id text not null references public.course_lessons(id) on delete cascade,
  version_number integer not null,
  source text not null check (source in ('import', 'edit')),
  checksum text not null,
  backup_path text null,
  snapshot jsonb not null,
  created_at timestamptz not null default now()
);

create unique index if not exists course_lesson_versions_lesson_version_idx
  on public.course_lesson_versions (lesson_id, version_number);

create table if not exists public.course_releases (
  id uuid primary key,
  label text not null,
  checksum text not null,
  generated_at timestamptz not null,
  created_at timestamptz not null default now(),
  lesson_count integer not null default 0,
  module_count integer not null default 0,
  track_count integer not null default 0,
  artifact_id uuid not null
);

create table if not exists public.course_release_lessons (
  id uuid primary key,
  release_id uuid not null references public.course_releases(id) on delete cascade,
  lesson_id text not null references public.course_lessons(id) on delete cascade,
  version_number integer not null,
  checksum text not null,
  created_at timestamptz not null default now()
);

create index if not exists course_release_lessons_release_idx
  on public.course_release_lessons (release_id);

create table if not exists public.course_release_artifacts (
  id uuid primary key,
  release_id uuid not null references public.course_releases(id) on delete cascade,
  artifact_type text not null check (artifact_type in ('website-course-release')),
  version text not null check (version in ('v1')),
  checksum text not null,
  storage_path text null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create unique index if not exists course_release_artifacts_release_idx
  on public.course_release_artifacts (release_id);

create table if not exists public.student_course_enrollments (
  id uuid primary key,
  website_profile_id uuid not null,
  course_track_key text not null references public.course_tracks(id) on delete cascade,
  status text not null check (status in ('active', 'paused', 'revoked')),
  release_id uuid null references public.course_releases(id) on delete set null,
  notes text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists student_course_enrollments_profile_idx
  on public.student_course_enrollments (website_profile_id);

alter table public.course_materials
  drop constraint if exists course_materials_type_check;

alter table public.course_materials
  add constraint course_materials_type_check
  check (type in ('text', 'question_ref', 'passage_ref', 'link'));
