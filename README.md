# Containerization Web App
Web App Project that can you Create, Track and Store Government and Private Projects. It can store Project Name, Project Type, Project Budget, Project Status, Project Address such as Geo-coordinates of the project using Leaflet map API.
# Dockerized Node.js HTTP Server

This Dockerfile sets up a lightweight Node.js environment using the Alpine variant as the base image. It copies the `index.html` and `scripts.js` files into the container, exposing port 8000 to allow external access to the application.

## Files Included

- `index.html`: The HTML file served by the HTTP server.
- `scripts.js`: The JavaScript file included in the server.
- `Dockerfile`: Contains instructions to build the Docker image.

## Requirements

- Docker installed on your system.

## Notes

- Ensure that your HTML and JavaScript files are properly configured for serving via an HTTP server.
- This setup uses `http-server` to serve the files, which is included as a dependency in the Node.js environment.

## Usage

To build the Docker image:

```bash
docker build -t node-http-server .
```
To run the container:
```bash
docker run -d -p 8000:8000 node-http-server
```


