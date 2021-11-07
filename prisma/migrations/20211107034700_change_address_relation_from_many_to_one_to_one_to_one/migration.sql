/*
  Warnings:

  - A unique constraint covering the columns `[ong_id]` on the table `adresses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "adresses_ong_id_key" ON "adresses"("ong_id");
