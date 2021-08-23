# Stage 1 - the build process
FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install

COPY . .

RUN npm run build

# Stage 2 - the production environment
FROM node:14-alpine as release
RUN apk add dumb-init

WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app

ENV NODE_ENV production
COPY ["package.json", "npm-shrinkwrap.json*"]
RUN npm install --production --silent

RUN mkdir -p dist
COPY --from=builder /usr/src/app/dist dist

ENV NODE_ENV=${NODE_ENV}
USER node

EXPOSE 3000

CMD ["dumb-init", "node", "dist/main.js"]