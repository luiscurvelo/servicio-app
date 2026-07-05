import type { FastifyPluginAsync } from 'fastify';
import { authRoutes } from './auth/routes.js';
import { bookingsRoutes } from './bookings/routes.js';
import { jobsRoutes } from './jobs/routes.js';
import { leadsRoutes } from './leads/routes.js';
import { messagingRoutes } from './messaging/routes.js';
import { prosRoutes } from './pros/routes.js';
import { quotesRoutes } from './quotes/routes.js';
import { reviewsRoutes } from './reviews/routes.js';
import { usersRoutes } from './users/routes.js';

export const modules: Array<{ prefix: string; routes: FastifyPluginAsync }> = [
  { prefix: '/auth', routes: authRoutes },
  { prefix: '/users', routes: usersRoutes },
  { prefix: '/jobs', routes: jobsRoutes },
  { prefix: '/pros', routes: prosRoutes },
  { prefix: '/leads', routes: leadsRoutes },
  { prefix: '/quotes', routes: quotesRoutes },
  { prefix: '/bookings', routes: bookingsRoutes },
  { prefix: '/messaging', routes: messagingRoutes },
  { prefix: '/reviews', routes: reviewsRoutes },
];
