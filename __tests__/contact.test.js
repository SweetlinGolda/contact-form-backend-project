const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

beforeAll(async () => {
  const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contactFormTest';
  await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe("Contact API", () => {
  it("should reject incomplete submission", async () => {
    const res = await request(app).post("/api/contact").send({ name: "Test" });
    expect(res.statusCode).toBe(400);
  }, 10000);

  it("should accept valid submission", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "John Doe",
      email: "john@example.com",
      subject: "Test",
      message: "Hello!"
    });
    expect(res.statusCode).toBe(201);
  }, 10000);
});
