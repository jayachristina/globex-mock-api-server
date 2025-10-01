
Run with

1. Git clone https://github.com/jayachristina/globex-mock-api-server

RUN:
```
npm install
node server.js
```

2. run quay.io/cloud-architecture-workshop/globex-mock-api:latest image on podman

```
podman pull quay.io/cloud-architecture-workshop/globex-mock-api:latest
podman run -p 127.0.0.1:3000:9091 quay.io/cloud-architecture-workshop/globex-mock-api:latest
```