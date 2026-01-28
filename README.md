# Christech-Services

[![Repository](https://img.shields.io/badge/repo-Christech--Services-blue)](https://github.com/aiyenigbacharles/Christech-Services)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/TS-97%25-blueviolet)](#) <!-- Adjust/replace with real badges -->

Quality printing, photocopying, scanning, and lamination services at affordable prices — backend and tooling for Christech.

Built primarily with TypeScript (≈97%), with small CSS and other assets.


## About
Christech-Services contains the backend services and tooling that power Christech’s product: a set of services for printing, photocopying, scanning, and lamination order management, fulfillment, and integrations (payments, email, file handling).

This repository is organized for developer productivity and delivery: TypeScript-first codebase, containerized local dev, and CI pipelines.

## Features
- RESTful HTTP API for placing and tracking print/scan/laminate jobs
- File upload/processing pipeline (PDF/image processing)
- Background job processing for long-running tasks (file conversion, batching)
- Order management and billing integrations
- Health checks, metrics, and logging
- Dockerized for local development and production

## Tech stack
- Primary language: TypeScript (~97%)
- Node.js runtime (recommended LTS, e.g., Node 18+)
- PostgreSQL (recommended) or other relational DB
- Redis for queues and caching
- Docker & docker-compose for local dev
- Optional: BullMQ, Bull, or Bee-Queue for background jobs
- Testing: Jest
- Linting: ESLint + TypeScript plugin
- Formatting: Prettier

## Repository layout
(This is a recommended layout — update if your repo differs)
```
/ (root)
├─ api/                 # Main HTTP API service (TypeScript)
│  ├─ src/
│  ├─ tests/
│  ├─ package.json
│  └─ tsconfig.json
├─ worker/              # Background worker service (TypeScript)
├─ infra/               # Deployment/infra manifests (k8s, helm, terraform)
├─ scripts/             # Helpful scripts & utilities
├─ docker-compose.yml
├─ Dockerfile (optional)
├─ .github/workflows/   # CI workflows
└─ README.md
```

## Getting started

Prerequisites
- Node.js 18+ (or the version your repo targets)
- npm or yarn
- Docker & docker-compose (recommended for local dev)
- Optional: PostgreSQL, Redis locally or via docker-compose

Clone the repo:
```bash
git clone https://github.com/aiyenigbacharles/Christech-Services.git
cd Christech-Services
```

Copy example environment:
```bash
cp .env.example .env
# Edit .env to set secrets and DB/Redis connection strings
```

Install and run the API (example):
```bash
# from repo root or api/ depending on layout
cd api
npm ci
npm run dev            # starts TypeScript Node process with hot-reload (e.g. ts-node-dev, nodemon)
```

Start all services with Docker Compose:
```bash
docker compose up --build
# or for older compose:
# docker-compose up --build
```

## Development

1. Install dependencies
```bash
cd api
npm ci
```

2. Run a local dev server (example with nodemon/ts-node)
```bash
npm run dev
# Example underlying command: ts-node-dev --respawn --transpile-only src/index.ts
```

3. Build for production
```bash
npm run build
# example: tsc -p tsconfig.build.json
```

4. Run built code
```bash
npm start
# example underlying: node dist/index.js
```

## Environment variables
Add a `.env.example` to the repo with required variables. Example variables:
```
# App
APP_ENV=development
APP_PORT=8000
APP_HOST=0.0.0.0

# DB
DATABASE_URL=postgresql://user:pass@db:5432/christech

# Redis
REDIS_URL=redis://redis:6379/0

# Auth
JWT_SECRET=replace-me

# External APIs
STRIPE_SECRET=sk_test_xxx
MAILER_DSN=smtp://user:pass@smtp.example.com:587

# File storage
STORAGE_PROVIDER=local   # or s3
S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY=
S3_SECRET_KEY=
```

Document every variable in `.env.example` so new developers can get started quickly.
`.github/workflows/ci.yml` for the repository. Tell me which and paste the files or allow repository access.
