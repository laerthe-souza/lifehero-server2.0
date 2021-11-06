/*
  Warnings:

  - You are about to drop the column `ongId` on the `incidents` table. All the data in the column will be lost.
  - Added the required column `ong_id` to the `incidents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_ongId_fkey";

-- AlterTable
ALTER TABLE "incidents" DROP COLUMN "ongId",
ADD COLUMN     "ong_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
