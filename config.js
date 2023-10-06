module.exports = {
  SERVER_PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
  NODE_ENV: process.env.NODE_ENV,
  isDevelopEnv: process.env.NODE_ENV === 'development'
};
