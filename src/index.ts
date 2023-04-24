import express from "express";
import cors from "cors";
import { Bybit } from "./bybit";
import { config } from "./configurations";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const client = new Bybit(config.API_KEY, config.API_SECRET);
app.post("/private/linear/order/create", async (req, res) => {
  const { side, symbol, order_type, qty, price } = req.body;

  try {
    const orderPlaced = await client.placeOrder({
      side,
      symbol,
      price,
      order_type,
      qty,
      time_in_force: "GoodTillCancel",
      reduce_only: false,
      close_on_trigger: false,
    });
    res.status(200).json(orderPlaced);
  } catch (error) {
    console.log("Error placing order", error);
  }
});

app.post("/private/linear/order/cancel", async (req, res) => {
  const { order_id, symbol } = req.body;
  try {
    const cancelledOrder = await client.cancelOrder({
      order_id,
      symbol,
    });
    res.status(200).json(cancelledOrder);
  } catch (error) {
    console.log("cancel order error", error);
  }
});

app.listen(process.env.PORT || 3000);
