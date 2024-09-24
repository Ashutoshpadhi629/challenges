import request from "supertest";
import app from "../src/index";

describe("Rate Limiting on GET /status", () => {
  it("should allow 5 requests and deny the 6th with Too Many Requests", async () => {
    const baseUrl = "/status";

    for (let i = 0; i < 5; i++) {
      const response = await request(app).get(baseUrl);
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ status: "health-task-1" });
    }

    const response = await request(app).get(baseUrl);
    expect(response.statusCode).toBe(429);
    expect(response.body).toEqual({
      error: "Too many requests, please try again later.",
    });
  });
});
