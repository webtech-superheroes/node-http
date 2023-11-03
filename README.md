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

## Docker

Building image

```
docker build -t messages-app
```

Run container

```
docker run -p 3000:3000 messages-app
```

## Load test

```
k6 run loadtest.js
```

Result - docker
```
     ✓ status was 201

     checks.........................: 100.00% ✓ 57000     ✗ 0
     data_received..................: 11 MB   90 kB/s
     data_sent......................: 9.6 MB  80 kB/s
     http_req_blocked...............: avg=29.28µs  min=0s       med=0s       max=18.57ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=7.34µs   min=0s       med=0s       max=9.05ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=6.45ms   min=504.2µs  med=4.15ms   max=45.17ms  p(90)=15.84ms  p(95)=18.96ms
       { expected_response:true }...: avg=6.45ms   min=504.2µs  med=4.15ms   max=45.17ms  p(90)=15.84ms  p(95)=18.96ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 57000
     http_req_receiving.............: avg=44.35µs  min=0s       med=0s       max=7.26ms   p(90)=0s       p(95)=521.7µs
     http_req_sending...............: avg=37.74µs  min=0s       med=0s       max=10.69ms  p(90)=0s       p(95)=85.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=6.37ms   min=464.4µs  med=4.05ms   max=44.71ms  p(90)=15.71ms  p(95)=18.75ms
     http_reqs......................: 57000   474.82103/s
     iteration_duration.............: avg=210.56ms min=200.52ms med=209.24ms max=255.23ms p(90)=219.19ms p(95)=221.76ms
     iterations.....................: 57000   474.82103/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```

Results - nodemon develop

```
✓ status was 201

     checks.........................: 100.00% ✓ 58290     ✗ 0
     data_received..................: 11 MB   92 kB/s
     data_sent......................: 9.8 MB  82 kB/s
     http_req_blocked...............: avg=32.51µs min=0s    med=0s       max=18.7ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=738ns   min=0s    med=0s       max=2.17ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=2.44ms  min=0s    med=1.55ms   max=36.42ms  p(90)=6.01ms   p(95)=8.65ms
       { expected_response:true }...: avg=2.44ms  min=0s    med=1.55ms   max=36.42ms  p(90)=6.01ms   p(95)=8.65ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 58290
     http_req_receiving.............: avg=49.04µs min=0s    med=0s       max=2.91ms   p(90)=0s       p(95)=506.7µs
     http_req_sending...............: avg=16.86µs min=0s    med=0s       max=3ms      p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=2.38ms  min=0s    med=1.39ms   max=36.42ms  p(90)=5.99ms   p(95)=8.61ms
     http_reqs......................: 58290   484.88794/s
     iteration_duration.............: avg=206.1ms min=200ms med=203.43ms max=255.76ms p(90)=216.35ms p(95)=217.39ms
     iterations.....................: 58290   484.88794/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```

Results - local build

```
✓ status was 201

     checks.........................: 100.00% ✓ 58264      ✗ 0
     data_received..................: 11 MB   92 kB/s
     data_sent......................: 9.8 MB  81 kB/s
     http_req_blocked...............: avg=23.53µs  min=0s    med=0s       max=13.45ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=829ns    min=0s    med=0s       max=2.11ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=2.17ms   min=0s    med=1.06ms   max=37.27ms  p(90)=5.55ms   p(95)=7.98ms
       { expected_response:true }...: avg=2.17ms   min=0s    med=1.06ms   max=37.27ms  p(90)=5.55ms   p(95)=7.98ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 58264
     http_req_receiving.............: avg=56.32µs  min=0s    med=0s       max=10.2ms   p(90)=0s       p(95)=524.7µs
     http_req_sending...............: avg=17.23µs  min=0s    med=0s       max=5.11ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=2.1ms    min=0s    med=1.01ms   max=37.27ms  p(90)=5.35ms   p(95)=7.7ms
     http_reqs......................: 58264   484.713601/s
     iteration_duration.............: avg=206.13ms min=200ms med=203.46ms max=251.46ms p(90)=216.59ms p(95)=217.53ms
     iterations.....................: 58264   484.713601/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```
