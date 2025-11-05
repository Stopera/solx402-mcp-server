import "../utils/env-loader.js";
import { DEFAULT_DEVNET_RPC_URL, PAYAI_FACILITATOR_URL } from "./constants.js";

export const useStreamHttp = process.env.USE_STREAMABLE_HTTP === "true";
export const port = Number(process.env.PORT || 3000);
export const host = process.env.HOST || "127.0.0.1";
export const isMainnet = process.env.IS_MAINNET === "true";

export const facilitatorUrl = process.env.FACILITATOR_URL as `${string}://${string}` || PAYAI_FACILITATOR_URL
export const maxPrice = Number(process.env.MAX_PRICE || 0);

export const privateKey = process.env.PRIVATE_KEY || "";

export const mainnetRpcUrl = process.env.MAINNET_RPC_URL || "";
export const devnetRpcUrl = process.env.DEVNET_RPC_URL || DEFAULT_DEVNET_RPC_URL;

export const useSolanaMcpServer = process.env.USE_SOLANA_MCP_SERVER === "true" || false;

if (!privateKey) {
  throw new Error("PRIVATE_KEY environment variable is not set.");
}

if (!mainnetRpcUrl) {
  throw new Error("MAINNET_RPC_URL environment variable is not set.");
}