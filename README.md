# TeamUp

TeamUp is an application for discovering players, teams, and pickup games based on sport, location, skill level, and availability.

## Repository Structure

```text
teamup/
├── backend/             # Spring Boot backend application
├── frontend/            # React frontend application
├── docs/                # Architecture and development documentation
├── .github/workflows/   # GitHub Actions CI workflows
├── docker-compose.yml   # Local service configuration
├── .gitignore
└── README.md


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

## Local PostgreSQL Development

TeamUp uses PostgreSQL for local development through Docker Compose.

### Start PostgreSQL

From the repository root:

```bash
docker compose up -d


## Frontend and Backend Communication

The React frontend runs on:

```text
http://localhost:5173

## Testing

### Backend Tests

Make sure the local PostgreSQL database is running:

```bash
docker compose up -d