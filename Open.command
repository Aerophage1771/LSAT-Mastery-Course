#!/bin/bash
cd "$(dirname "$0")"
PORT=$(( RANDOM % (10000 - 2000 + 1) + 2000 ))
(sleep 3 && open "http://localhost:$PORT") &
npm run dev -- --port "$PORT"
