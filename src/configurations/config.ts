import "dotenv/config";

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN || "",
  PROJECT_ID: process.env.PROJECT_ID || "",
  API_KEY: process.env.API_KEY || "",
  API_SECRET: process.env.API_SECRET || "",
};
