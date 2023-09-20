-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "cedula" DOUBLE PRECISION NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "patron" VARCHAR(200) NOT NULL,
    "business_name" VARCHAR(200) NOT NULL,
    "tel1" DOUBLE PRECISION NOT NULL,
    "tel2" DOUBLE PRECISION NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cedula" ON "Employee"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "name" ON "Employee"("name");
