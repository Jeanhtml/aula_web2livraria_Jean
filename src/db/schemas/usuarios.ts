import {
  mssqlTable,
  int,
  varchar,
  datetime,
  bit,
} from 'drizzle-orm/mssql-core';

export const UsuariosTabela = mssqlTable('Usuarios', {
  id: int().primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  passoword: varchar('passaword_hashed', { length: 255 }).notNull(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Usuarios = typeof UsuariosTabela.$inferSelect;
export type CriarUsuarios = typeof UsuariosTabela.$inferInsert;
