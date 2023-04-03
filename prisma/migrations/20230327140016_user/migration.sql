/*
  Warnings:

  - You are about to alter the column `firstname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `lastname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` VARCHAR(40) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `firstname` VARCHAR(40) NOT NULL,
    MODIFY `lastname` VARCHAR(40) NOT NULL,
    MODIFY `password` VARCHAR(40) NOT NULL;
