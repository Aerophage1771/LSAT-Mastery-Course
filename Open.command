#!/bin/bash
cd "$(dirname "$0")"
PORT=8002
(sleep 3 && open "http://localhost:$PORT") &
npm run dev -- --port "$PORT"
