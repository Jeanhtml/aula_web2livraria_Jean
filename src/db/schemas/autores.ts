import { mssqlTable, int, varchar, datetime } from 'drizzle-orm/mssql-core';

export const autoresTabela = mssqlTable('autores', {
  id: int().primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Autor = typeof autoresTabela.$inferSelect;
export type CriarAutor = typeof autoresTabela.$inferInsert;
