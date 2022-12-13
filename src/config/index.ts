import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV ?? 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Environment
   */
  ENV: process.env.NODE_ENV,

  /**
   * port
   */
  port: parseInt((process.env.PORT)??"8080", 10),

  /**
   * Connection String of postgres
   */
  database: {
    user: process.env.PGUSER ?? "postgres",
    host: process.env.PGHOST ?? "localhost",
    password: process.env.PGPASSWORD ?? "unknown",
    database: process.env.PGDATABASE ?? "postgres",
    port: parseInt(process.env.PGPORT ?? "5432", 10) 
  },


  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL ?? 'silly',
  },

  /**
   * ipstack API Credentials
   */

  ipstack: {
    base_url: process.env.ipstack_url ?? 'undefined',
    access_key: process.env.access_key ?? 'undefined'
  },


  /**
   * API configs
   */
  api: process.env.API ?? '/api',

  /**
   * Secret for signing session id
   */
  secret: process.env.SECRET ?? 'defaultsecret'
};
