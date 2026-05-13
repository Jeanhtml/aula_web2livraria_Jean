import {
  mssqlTable,
  int,
  varchar,
  datetime,
  bit,
  decimal,
} from 'drizzle-orm/mssql-core';
export const livrosTabela = mssqlTable('livros', {
  id: int().primaryKey().identity(),
  titulo: varchar({ length: 100 }).notNull(),
  autorId: int().notNull(),
  editoraId: int().notNull(),
  anoPublicacao: int().notNull(),
  quantidade: int().notNull(),
  preco: decimal({ precision: 10, scale: 2 }).notNull(),
  criadoEm: datetime().notNull().defaultGetDate(),
  atualizadoEm: datetime().notNull().defaultGetDate(),
});
function mssqlDecimal(arg0: { precision: number; scale: number }) {
  throw new Error('Function not implemented.');
}

export type Livros = typeof livrosTabela.$inferSelect;
export type CriarLivroDto = typeof livrosTabela.$inferInsert;
