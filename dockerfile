FROM node:latest
WORKDIR /usr/app
COPY projeto_final/backend/package.json ./
RUN npm install
COPY ./backend/ ./
CMD ["npm", "run", "start"]