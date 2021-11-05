/*
  Warnings:

  - You are about to drop the column `user_id` on the `adresses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "adresses" DROP CONSTRAINT "adresses_user_id_fkey";

-- AlterTable
ALTER TABLE "adresses" DROP COLUMN "user_id";
