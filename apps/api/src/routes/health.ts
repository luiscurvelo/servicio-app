import { healthCheckSchema } from '@servicio/shared/schemas';
import type { FastifyPluginAsync } from 'fastify';

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', async () => {
    return healthCheckSchema.parse({ status: 'ok' });
  });
};
