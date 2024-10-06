const prisma = require("../utils/prisma");

class ProductsService {
  static async post(body) {
    const product = await prisma.products.create({
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });

    return product;
  }

  static async get() {
    return await prisma.products.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });
  }


  static async put(body) {
    return await prisma.products.update({
      where: { id: body.id },
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });
  }
}

module.exports = ProductsService;
