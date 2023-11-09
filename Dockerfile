FROM node:18-alpine as builder

WORKDIR /app

# copy base files
COPY package.json ./
COPY yarn.lock ./

# install deps
RUN yarn install --frozen-lockfile

# copy code

COPY src ./src
COPY index.html ./

ENV NODE_ENV=production

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80