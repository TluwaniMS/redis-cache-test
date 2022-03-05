import { createClient } from "redis";

const REDIS_PORT = process.env.REDIS_PORT | 6379;

const client = createClient(REDIS_PORT);

module.exports = { client };
