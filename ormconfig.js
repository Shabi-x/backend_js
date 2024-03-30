//数据库迁移
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'], //知道我们的实体在哪里
  migrations: ['dist/migrations/*.js'], //知道我们的迁移文件将在哪里
  cli: {
    migrationsDir: 'src/migrations',
  },
};
