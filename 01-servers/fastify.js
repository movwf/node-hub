const fastify = require("fastify")({ logger: true });

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.listen(3002, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
