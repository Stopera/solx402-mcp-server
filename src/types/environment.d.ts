declare namespace NodeJS {
  interface ProcessEnv {
    USE_STREAMABLE_HTTP?: string;
    HOST?: string;
    PORT?: string;
    FACILITATOR_URL?: string;
    MAX_PRICE?: string;
    IS_MAINNET?: string;
    PRIVATE_KEY: string;
    MAINNET_RPC_URL: string;
    DEVNET_RPC_URL?: string;
  }
}