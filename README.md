# Traefik - Microservices

This repository is a sample traefik proxy and express typescript as a microservice configured with traefik labelusing
using traefik official docker image.

## Getting Started

Docker network named `dev` is required to be created with `docker network create dev` and configured to use same network in all services.

- In root dir, run `docker-compose up -d`. This must be run first if not traefik won't be able to detect microservices.
- In express dir, follow the instruction in `README.md` to build and run express typescript in docker container.
