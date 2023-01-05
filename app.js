const express = require("express");
const port = 3000;
const controller = require("./controller");

const app = express();
const usedPort = port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // POST json格式
app.get("/api/orders", controller.getOrders);
app.get("/health", (_, res) => res.status(200).json("server is running"));

app.listen(usedPort, async () => {
  console.log(`App listening on port ${usedPort}`);
});
