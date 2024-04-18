# NOTES: 
# build command: docker build -t us-east4-docker.pkg.dev/ultra-dominion-420701/portfolio/portfolio:v1 .
# push command: docker push us-east4-docker.pkg.dev/ultra-dominion-420701/portfolio/portfolio:v1
# google cli auth command: gcloud auth login

# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
    && npm install serve -g \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "dist" ]