const local = {
  type: "postgres",
  synchronize: true,
  logging: false, // process.env.NODE_ENV !== 'production',
  host: process.env.DB_WRITE_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE_NAME,
  port: process.env.DB_PORT,
  entities: ["src/entity/**/*.ts"],
  ssl: { rejectUnauthorized: false }
};

const production = {
  type: "postgres",
  synchronize: true,
  logging: false, // process.env.NODE_ENV !== 'production',
  url: process.env.DATABASE_URL,
  entities: ["src/entity/**/*.ts"],
  ssl: { rejectUnauthorized: false }
};


export default (process.env.ENV === "production"? production:local)