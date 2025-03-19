# Use Node.js official image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build the Vite project
RUN npm run build

# Use nginx to serve the built frontend
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
