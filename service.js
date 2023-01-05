const model = require("./model");

const service = {
  getOrders: async (year) => {
    if (!year || year.length !== 4) {
      const orders = await model.getOrders();

      return orders;
    } else {
      const begin = new Date(`${year}-01-01`);
      const end = new Date(`${year}-12-31`);
      const orders = await model.getOrdersByDate(begin, end);

      return orders;
    }
  },
};

module.exports = service;
