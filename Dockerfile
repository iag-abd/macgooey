FROM node:alpine

COPY . /app

# Build MacGyver UI
WORKDIR /app
RUN npm i

CMD ["npm", "run", "storybook"]
