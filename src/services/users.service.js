const prisma = require("../utils/prisma");
const findUser = require("../utils/findUser");

class UsersService {
  static async post(body) {
    const user = await prisma.users.create({
      data: {
        email: body.email,
        name: body.name,
        lastname: body.lastname,
        password: body.password,
        type: body.type,
      },
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        password: true,
        type: true,
      },
    });

    return user;
  }
  static async get() {
    return await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        password: true,
        type: true,
      },
    });
  }


  static async put(body) {
    return await prisma.users.update({
      where: { id: body.id },
      data: {
        email: body.email,
        name: body.name,
        lastname: body.lastname,
        password: body.password,
        type: body.type,
      },
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        password: true,
        type: true,
      },
    });
  }
}

module.exports = UsersService;
