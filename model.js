const prisma = require("./config/prisma");

const model = {
  getOrdersByDate: async (begin, end) => {
    const order = await prisma.orders.findMany({
      where: {
        createdAt: {
          gte: begin,
          lt: end,
        },
      },
      select: {
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
        product: {
          select: {
            id: true,
            name: true,
          },
        },
        createdAt: true,
      },
    });
    console.log(order);
    return order;
  },
};

module.exports = model;
