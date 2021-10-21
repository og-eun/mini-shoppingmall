const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
  db: 0,
  password: process.env.REDIS_PASSWORD,
});

module.exports = redisClient;
