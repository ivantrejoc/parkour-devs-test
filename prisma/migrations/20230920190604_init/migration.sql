/*
  Warnings:

  - Changed the type of `cedula` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "cedula",
ADD COLUMN     "cedula" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cedula" ON "Employee"("cedula");
