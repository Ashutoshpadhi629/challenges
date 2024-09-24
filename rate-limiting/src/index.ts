import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

/* const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { error: "Too many requests, please try again later." },
});

app.get("/status", limiter, (req, res) => {
  res.status(200).json({ status: "health-task-1" });
});
 */
export default app;
