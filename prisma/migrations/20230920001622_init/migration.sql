/*
  Warnings:

  - A unique constraint covering the columns `[cedula]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cedula` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "cedula" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cédula" ON "Employee"("cedula");
