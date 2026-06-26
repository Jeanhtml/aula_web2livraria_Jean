import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../schemas/index.ts';

export type DB = NodePgDatabase<typeof schema>;
