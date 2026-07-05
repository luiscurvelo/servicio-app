import Fastify from 'fastify';
import { env } from './config/env.js';
import { modules } from './modules/index.js';
import { registerErrorHandler } from './plugins/error-handler.js';
import { healthRoutes } from './routes/health.js';

export async function buildApp() {
  const app = Fastify({
    logger: {
      level: env.LOG_LEVEL,
    },
  });

  await registerErrorHandler(app);
  await app.register(healthRoutes);

  for (const { prefix, routes } of modules) {
    await app.register(routes, { prefix });
  }

  return app;
}
