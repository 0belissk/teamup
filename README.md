# TeamUp

TeamUp is an application for discovering players, teams, and pickup games based on sport, location, skill level, and availability.

## Prerequisites

Install the following before running TeamUp locally:

- Git
- Java 21
- Maven
- Node.js
- npm
- Docker Desktop

## Getting Started

Clone the repository:

```bash
git clone https://github.com/0belissk/teamup.git
cd teamup
```

Create the local environment files:

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
```

Start PostgreSQL:

```bash
docker compose up -d
```

Start the backend:

```bash
cd backend
mvn spring-boot:run
```

In another terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev
```

The applications run at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- API Health: `http://localhost:8080/api/health`
- Actuator Health: `http://localhost:8080/actuator/health`

## Repository Structure

```text
teamup/
├── backend/             # Spring Boot backend application
├── frontend/            # React frontend application
├── docs/                # Architecture and development documentation
├── .github/workflows/   # GitHub Actions CI workflows
├── docker-compose.yml   # Local service configuration
├── .env.example         # Backend environment variable example
├── .gitignore
└── README.md
```

## Backend

The TeamUp backend is a Spring Boot modular monolith located in `/backend`.

### Technology

- Java 21
- Spring Boot 3.5.16
- Maven
- PostgreSQL
- Spring Data JPA
- Flyway
- Spring Boot Actuator
- Jakarta Validation

### Package Structure

```text
com.teamup
├── config
├── common
├── user
├── player
├── team
├── pickup
└── request
```

## Environment Configuration

Copy the backend example environment file:

```bash
cp .env.example .env
```

Required backend variables:

```text
DB_URL=jdbc:postgresql://localhost:5432/teamup
DB_USERNAME=teamup
DB_PASSWORD=change_me
```

Copy the frontend example environment file:

```bash
cp frontend/.env.example frontend/.env
```

Required frontend variable:

```text
VITE_API_BASE_URL=http://localhost:8080
```

Real `.env` files are ignored by Git and should never be committed.

## Local PostgreSQL Development

TeamUp uses PostgreSQL for local development through Docker Compose.

### Start PostgreSQL

```bash
docker compose up -d
```

Verify it is running:

```bash
docker compose ps
```

### Stop PostgreSQL

```bash
docker compose down
```

### Reset PostgreSQL

To delete the local database and recreate it from Flyway migrations:

```bash
docker compose down -v
docker compose up -d
```

The `-v` flag removes the PostgreSQL volume.

Flyway migrations are stored in:

```text
backend/src/main/resources/db/migration
```

## Frontend and Backend Communication

The React frontend runs on:

```text
http://localhost:5173
```

The Spring Boot backend runs on:

```text
http://localhost:8080
```

The frontend gets the backend URL from:

```text
VITE_API_BASE_URL
```

API requests are centralized through:

```text
frontend/src/api/apiClient.ts
```

The backend health endpoint is:

```text
GET /api/health
```

When the backend is reachable, the frontend displays:

```text
Backend Status: Connected
```

For local development, the backend allows requests from:

```text
http://localhost:5173
```

## Testing

### Backend Tests

Make sure PostgreSQL is running:

```bash
docker compose up -d
```

Then run:

```bash
cd backend

DB_URL=jdbc:postgresql://localhost:5432/teamup \
DB_USERNAME=teamup \
DB_PASSWORD=your_local_password \
mvn test
```

### Frontend Tests

```bash
cd frontend
npm test
```

The frontend test suite uses Vitest and React Testing Library.

### Frontend Production Build

```bash
cd frontend
npm run build
```

GitHub Actions automatically runs backend and frontend checks for pull requests targeting `main`.

If a required build or test fails, the CI workflow fails.

## Architecture Overview

```text
Browser
   |
   v
React
   |
   | REST
   v
Spring Boot
   |
   v
PostgreSQL
```

For deeper architecture and system-design documentation, see the [`/docs`](./docs) directory.