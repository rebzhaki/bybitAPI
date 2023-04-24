import { config } from "./configurations";
import {
  InverseClient,
  LinearClient,
  InverseFuturesClient,
  SpotClientV3,
  UnifiedMarginClient,
  USDCOptionClient,
  USDCPerpetualClient,
  AccountAssetClient,
  CopyTradingClient,
  RestClientV5,
  NewLinearOrder,
} from "bybit-api";
import { Order } from "./interfaces/IBybit";

const wsConfig = {
  KEY: config.API_KEY,
  SECRET: config.API_SECRET,
  testnet: true,
  market: "linear",
  MAIN_URL: "https://api-testnet.bybit.com",
};

// const ws = new WebsocketClient(wsConfig);
// ws.on("update", (data: any) => {
//   console.log("update", data);
// });

// Create an instance of the SpotClientV3 class
// const symbol: string = "BTCUSDT";
// const client = new SpotClientV3(wsConfig);
// client
//   .getOrderBook(symbol)
//   .then((orderBook) => {
//     console.log(orderBook.result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Define the trading pair you want to get the order book data for

export class Bybit {
  client2: LinearClient;
  constructor(key: string, secret: string, testnet: boolean = true) {
    this.client2 = new LinearClient({
      key,
      secret,
      testnet,
    });
  }
  placeOrder = async (params: NewLinearOrder): Promise<Order | null> => {
    const { ret_code, ret_msg, result } = await this.client2.placeActiveOrder(
      params
    );
    console.log("code, msg, result", ret_code, ret_msg, result);

    try {
      if (ret_code == 0 && ret_msg == "OK" && result) {
        return {
          order_id: result.order_id,
          user_id: result.user_id,
          symbol: result.symbol,
          side: result.side,
          order_type: result.order_type,
          price: result.price,
          reduce_only: result.reduce_only,
          qty: result.qty,
        };
      }
    } catch (error) {
      console.log("bybit err", error);
    }
    return null;
  };

  cancelOrder = async (params: {
    symbol: string;
    order_id: string;
  }): Promise<boolean> => {
    const { ret_code, ret_msg, result } = await this.client2.cancelActiveOrder({
      symbol: params.symbol,
      order_id: params.order_id,
    });
    console.log("cancel Order", result);

    return ret_code === 0 && ret_msg === "OK";
  };
}
