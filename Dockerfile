# Use a Node.js base image with version 18.17.1
FROM node:18.17.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . . 
COPY .next .next

# Expose port (if necessary)
EXPOSE 3000

# Specify the command to start the application
CMD ["npm", "start"]
