FROM node:20.4-alpine3.18 As development

# Create app directory
WORKDIR /usr/src/app

RUN apk add openssl

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node ./backend/package*.json ./
COPY ./backend/prisma prisma

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node