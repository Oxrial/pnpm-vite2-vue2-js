# Use Ubuntu as base image
FROM ubuntu:22.04

# Install necessary packages
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y curl git

# Install Node.js and pnpm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm@7

# Copy the Vue project to the container's working directory
COPY ./ /app

# Change the working directory for further instructions
WORKDIR /app

# Install pnpm dependencies
RUN pnpm install

# Expose port 8080 for development server
EXPOSE 6817

# Start the development server
CMD ["pnpm", "run", "serve"]