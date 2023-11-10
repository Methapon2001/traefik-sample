FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build:node

FROM node:20-alpine as prod-stage

WORKDIR /app

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/public /app/public
COPY --from=build-stage /app/package.json /app/package.json

RUN yarn install --production

EXPOSE 80

CMD ["node", "dist/index.js"]
