import knex from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
  useNullAsDefault: true,
});

// Criação da tabela, se não existir
db.schema.hasTable('mensagens').then((exists) => {
  if (!exists) {
    return db.schema.createTable('mensagens', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table.string('email');
      table.text('mensagem');
      table.timestamp('data_envio').defaultTo(db.fn.now());
    });
  }
});

export default db;
