# Basic HTTP implementation

Demonstrates basic HTTP implementation using the built in http module from nodejs

## Install

Clone the repo and install dependecies

```
npm install
```

## Testing

```
npm test
```

## Building and running the app

First build from typescript to javascript

```
npm run build
```

The compiled sources will be generated in the dist directory. Now you can execute the app by issuing the following command.
```
node dist/index.js
```

## Starting the app in dev mode

```
npm run start:dev
```

## Endpoints

Retrieve a list of messages

**Request**
```
GET /messages
```

```bash
curl http://localhost:3000/messages
```

**Response**

Status code: 200 OK

Response body:
```json
{"messages":[]}
```

Post a new message

**Request**

```
POST /messages
```

Payload

```
Content-Type: application/json

{"message":"Hello, World!"}
```

```bash
curl -X POST http://localhost:3000/messages -H "Content-Type: application/json" -d '{"message":"Hello, World!"}'

```

**Response**

Status code: 201 Accepted

Response body:
```json
{"message":"Message received"}
```


