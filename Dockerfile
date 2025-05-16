# Define the Node.js version
ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your app runs on
EXPOSE 8081

# Start the Next.js server
CMD ["npm", "start"]
