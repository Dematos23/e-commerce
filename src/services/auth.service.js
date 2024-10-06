const prisma = require("../utils/prisma");

class AuthService {
  static async login(body) {
    const user = await prisma.users.findUnique({
      where: {
        email: body.email,
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

    if (user.password === body.password) {
      delete user.password;
      return { message: "Login correcto", user };
    } else {
      return { message: "Credenciales incorrectas" };
    }
  }
}

module.exports = AuthService;
