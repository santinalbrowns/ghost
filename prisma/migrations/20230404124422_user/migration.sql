-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(40) NOT NULL,
    `lastname` VARCHAR(40) NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `role` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
