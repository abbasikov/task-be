module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres123',
    database: 'dabot',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  }
};
