ALTER TABLE [livros] DROP CONSTRAINT [livros_criadoEm_default];--> statement-breakpoint
ALTER TABLE [livros] DROP CONSTRAINT [livros_atualizadoEm_default];--> statement-breakpoint
ALTER TABLE [livros] ADD [id_autor] int NOT NULL;--> statement-breakpoint
ALTER TABLE [livros] ADD [descricrao] text NOT NULL;--> statement-breakpoint
ALTER TABLE [livros] ADD [criado_em] datetime NOT NULL CONSTRAINT [livros_criado_em_default] DEFAULT (getdate());--> statement-breakpoint
ALTER TABLE [livros] ADD CONSTRAINT [livros_id_autor_autores_id_fk] FOREIGN KEY ([id_autor]) REFERENCES [autores]([id]);--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [autorId];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [editoraId];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [anoPublicacao];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [quantidade];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [preco];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [criadoEm];--> statement-breakpoint
ALTER TABLE [livros] DROP COLUMN [atualizadoEm];