FROM node:10.12.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY src .
RUN yarn && yarn build
RUN /amsy810.txt

EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
