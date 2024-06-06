# Use a lightweight Node.js image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the HTML and JavaScript files into the container
COPY index.html /app
COPY scripts.js /app

# Expose port 8000 to allow external access
EXPOSE 8000

# Command to run when the container starts
CMD ["npx", "http-server", "-p", "8000"]
