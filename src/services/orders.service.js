const prisma = require("../utils/prisma");

class OrdersService {
  static async post(body) {
    const product = await prisma.orders.create({
      data: {
        deliveryData: body.deliveryData,
        observation: body.observation,
        userId: body.userId,
        products: {
          connect: body.products.map((product) => ({ id: product })),
        },
      },
      select: {
        id: true,
        createdAt: true,
        deliveryData: true,
        observation: true,
        userId: true,
        products: true,
      },
    });

    return product;
  }

  static async get() {
    return await prisma.orders.findMany({
      select: {
        id: true,
        createdAt: true,
        deliveryData: true,
        observation: true,
        userId: true,
        products: true,
      },
    });
  }

  static async put(body) {
    return await prisma.orders.update({
      where: { id: body.id },
      data: {
        deliveryData: body.deliveryData,
        observation: body.observation,
        userId: body.userId,
        products: {
          connect: body.products.map((product) => ({ id: product })),
        },
      },
      select: {
        id: true,
        createdAt: true,
        deliveryData: true,
        observation: true,
        userId: true,
        products: true,
      },
    });
  }
}

module.exports = OrdersService;
