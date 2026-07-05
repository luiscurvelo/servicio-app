import { z } from 'zod';

/** Placeholder schema to verify Zod wiring; replaced in Phase 2. */
export const healthCheckSchema = z.object({
  status: z.literal('ok'),
});

export type HealthCheck = z.infer<typeof healthCheckSchema>;
