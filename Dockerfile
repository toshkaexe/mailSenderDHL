# Dockerfile

FROM node:20

WORKDIR /app

# Copy npmrc template with placeholder
COPY .npmrc.template .npmrc
ARG NPM_TOKEN
RUN sed -i "s|_NPM_TOKEN_|${NPM_TOKEN}|" .npmrc

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
