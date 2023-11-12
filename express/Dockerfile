FROM node:20-slim as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY . .

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build:node

FROM base as prod
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY --from=base /app/public /app/public

EXPOSE 80

CMD ["pnpm", "start"]
