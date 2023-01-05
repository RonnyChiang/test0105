const service = require("./service");
const controller = {
  getOrders: async (req, res, next) => {
    const year = req.query.year;
    const orders = await service.getOrders(year);
    console.log("go", orders);
    res.status(200).json(orders);
  },
};

module.exports = controller;
