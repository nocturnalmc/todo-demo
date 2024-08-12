# pull the Node.js Docker image
FROM node:lts-alpine

# update the package index
RUN apk update && apk add --no-cache tzdata

# set timezone data
ENV TZ=Asia/Kuala_Lumpur

# create app directory
WORKDIR /usr/src/app

# bundle app source
COPY . .

# set work dir to references
WORKDIR /usr/src/app/references

# install node_modules, build client React JS, delete node_modules server side, prune image for production, clear npm cache, delete unnecessary folder client side
RUN npm run install-prod && \
    npm run build-client && \
    rm -rf node_modules && \
    npm run prune-prod && \
    npm cache clean --force && \
    rm -rf client/node_modules && \
    rm -rf client/src && \
    rm -rf client/public

# app run on port 5000
EXPOSE 5000

# run the server
CMD ["npm", "start"]
