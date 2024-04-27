import rateLimit from "express-rate-limit";
// Set up rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // limit each IP to 3 requests per minute
  message: "Too many requests from this IP, please try again after a minute",
});

export default limiter;
