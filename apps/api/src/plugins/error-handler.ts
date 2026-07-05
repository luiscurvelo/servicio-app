import type { FastifyError, FastifyInstance } from 'fastify';

export async function registerErrorHandler(app: FastifyInstance): Promise<void> {
  app.setErrorHandler((error: FastifyError, request, reply) => {
    request.log.error(error);

    const statusCode = error.statusCode ?? 500;

    reply.status(statusCode).send({
      error: error.message,
      statusCode,
    });
  });
}
