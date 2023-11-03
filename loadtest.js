import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 100,
    duration: '2m',
};

export default function () {
    const url = 'http://localhost:3000/messages';
    const payload = JSON.stringify({ message: 'Hello, World!' });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = http.post(url, payload, params);

    // Add checks for response status
    check(response, { 'status was 201': (r) => r.status === 201 });

    // Simulate think time
    sleep(0.2);
}