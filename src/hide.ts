import { Bot } from "grammy";
import Web3 from "web3";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";
import { config } from "./configurations";
// import { buildApprovedNamespaces } from "@walletconnect/utils";
import WalletConnect from "walletconnect";

const token = config.BOT_TOKEN;
const bot = new Bot(token);

const core = new Core({
  projectId: config.PROJECT_ID,
});

let web3;

// let provider = detectProvider();

bot.command("start", (ctx) => ctx.reply("welcome to Social Money Market Fund"));

// bot.command("stop", async (ctx) => {
//   ctx.reply("Stopping");
//   const connector = await wc.connector?.killSession();
// });

bot.command("connect", async (ctx) => {
  const chatId = ctx.chat.id;

  const wc = new WalletConnect();
  const walletconnect_uri = wc.connect();
  console.log(`${(await walletconnect_uri).uri}`);

  //await wc.connector?.createSession();
  // const connector = await wc.connect();
  // console.log(`hello ${connector.uri}`);

  // const bridge = connector.bridge;

  // const web3wallet = await Web3Wallet.init({
  //   core, // <- pass the shared `core` instance
  //   metadata: {
  //     name: "social app",
  //     description: "Demo Client as Wallet/Peer",
  //     url: "www.walletconnect.com",
  //     icons: [],
  //   },
  // });
  // console.log(
  //   "paired",
  //   await web3wallet.core.pairing.pair({
  //     uri: `metamask://wc?uri=${connector.uri}`,
  //   })
  // );

  try {
    //   await web3wallet.on("session_proposal", async (proposal) => {
    //     console.log("Then we are here");
    //     const { id, params } = proposal;
    //     console.log("params", params);

    //     const approvedNamespaces = buildApprovedNamespaces({
    //       proposal: params,
    //       supportedNamespaces: {
    //         eip155: {
    //           chains: ["eip155:5", "eip155:137"],
    //           methods: ["eth_sendTransaction", "personal_sign"],
    //           events: ["accountsChanged", "chainChanged"],
    //           accounts: [`eip155:5:${params}`],
    //         },
    //       },
    //     });
    //     const session = await web3wallet.approveSession({
    //       id,
    //       namespaces: approvedNamespaces,
    //     });

    //     web3wallet.on("session_request", async (event) => {
    //       const { topic, params, id } = event;
    //       const { request } = params;
    //       const requestParamsMessage = request.params[0];
    //       console.log("here", requestParamsMessage);

    //       // convert `requestParamsMessage` by using a method like hexToUtf8
    //       // const message = hexToUtf8(requestParamsMessage)

    //       // // sign the message
    //       // const signedMessage = await wallet.signMessage(message)

    //       // const response = { id, result: signedMessage, jsonrpc: '2.0' }

    //       // await web3wallet.respondSessionRequest({ topic, response })
    //     });
    //   });

    ctx.reply(`${(await walletconnect_uri).uri}`);
  } catch (e) {
    console.log("Errorrr", e);
  }
});
bot.start();
