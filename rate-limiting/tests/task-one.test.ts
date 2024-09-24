import request from "supertest";
import app from "../src/index";

describe("GET /status", () => {
  it('should return status: "Healthy-task-1"', async () => {
    const response = await request(app).get("/status");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "health-task-1" });
  });
});
