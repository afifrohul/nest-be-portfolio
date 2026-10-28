/*
  Warnings:

  - Changed the type of `start_year` on the `Education` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_year` on the `Education` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "start_year",
ADD COLUMN     "start_year" INTEGER NOT NULL,
DROP COLUMN "end_year",
ADD COLUMN     "end_year" INTEGER NOT NULL;
