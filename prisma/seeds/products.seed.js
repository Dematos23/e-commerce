const fs = require("fs");
const path = require("path");

async function products(prisma) {
  const filePath = path.join(__dirname, "data", "products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  await Promise.all(
    data.map(async (product) => {
      await prisma.products.create({
        data: {
          name: product.name,
          price: product.price,
          description: product.description,
        },
      });
    })
  );
}

module.exports = products;
