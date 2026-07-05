import { config } from 'dotenv';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { z } from 'zod';

const require = createRequire(import.meta.url);
const packageRoot = dirname(require.resolve('@servicio/api/package.json'));
config({ path: resolve(packageRoot, '.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default('0.0.0.0'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
});

export const env = envSchema.parse(process.env);
