import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1711789678865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    ); // 重命名列名
  } //up方法是我们要指示的需要更改的内容以及如何更改的内容

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    ); // 重命名列名
  } //down方法是我们要指示的需要撤销更改的内容以及如何撤销更改的内容
}
