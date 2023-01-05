const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const result = await next(params);

  return result;
});

module.exports = prisma;
