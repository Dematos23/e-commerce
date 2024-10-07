/*
  Warnings:

  - You are about to drop the `_OrdersUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OrdersUsers" DROP CONSTRAINT "_OrdersUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrdersUsers" DROP CONSTRAINT "_OrdersUsers_B_fkey";

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_OrdersUsers";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
