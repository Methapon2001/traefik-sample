# Express TypeScript

This is sample express typescript. This sample will be use to run as a microservice under traefik proxy.

## Getting Started

This must be done after traefik is up.

- To run development server, use `pnpm run dev`.
- To build for node, use `pnpm run build:node` and run with `pnpm run start`.
- To build docker image, use `pnpm run build:docker` and run with `docker-compose up -d`. **_Docker is required_**.

All other script can be found in `package.json` as this is intended to be a sample traefik with microservice setup.
