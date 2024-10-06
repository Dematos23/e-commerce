const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const users = require("./seeds/users.seed.js");
const products = require("./seeds/products.seed.js");

async function main() {
  await Promise.all([users(prisma), products(prisma)]);
}

main()
  .catch((error) => console.log(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
