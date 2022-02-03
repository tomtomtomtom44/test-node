FROM node:14-alpine
#Create app directory
WORKDIR /usr/src/app
#Install app dependencies
COPY package*.json ./
RUN npm install
#To run code for production
#RUN npm ci --only=production
#Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "myFirst.js" ]
