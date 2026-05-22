CREATE TABLE [livros] (
	[id] int IDENTITY(1, 1),
	[titulo] varchar(100) NOT NULL,
	[autorId] int NOT NULL,
	[editoraId] int NOT NULL,
	[anoPublicacao] int NOT NULL,
	[quantidade] int NOT NULL,
	[preco] decimal(10,2) NOT NULL,
	[criadoEm] datetime NOT NULL CONSTRAINT [livros_criadoEm_default] DEFAULT (getdate()),
	[atualizadoEm] datetime NOT NULL CONSTRAINT [livros_atualizadoEm_default] DEFAULT (getdate()),
	CONSTRAINT [livros_pkey] PRIMARY KEY([id])
);
