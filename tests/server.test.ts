import server from '../src/server';
import http from 'http';
import supertest from 'supertest';

describe("test add function", () => {
    it("should create a valid server", () => {
        expect(server).toBeInstanceOf(http.Server);
    });

    it("should respond with 404 for non existing endpont",async () => {
        const response = await supertest(server)
            .get('/not-available')
            .expect(404);
    });

    it("should respond with messages", async () => {
        const response = await supertest(server)
            .get('/messages')
            .expect(200);
        expect(response.body).toBeDefined();
        expect(response.body.messages.length).toBe(0);
    });

    it("should accept messages", async () => {
        const response = await supertest(server)
            .post('/messages')
            .send({ message: 'Hello, World!' })
            .set('Accept', 'application/json')
            .expect(201);
    });

    it("should have one message", async () => {
        const response = await supertest(server)
            .get('/messages')
            .expect(200);
        expect(response.body).toBeDefined();
        expect(response.body.messages.length).toBe(1);
    });

    it("should throw error when message not provided", async () => {
        const response = await supertest(server)
            .post('/messages')
            .send({ msg: 'Hello, World!' })
            .set('Accept', 'application/json')
            .expect(400);
    });
});