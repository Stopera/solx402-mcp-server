import { privateKey } from "../config/environment.js";
import { lookupKnownSPLToken } from "@faremeter/info/solana";
import { mcpConfig } from "../config/index.js";
import { Connection, Keypair, PublicKey, VersionedTransaction } from "@solana/web3.js";
import { createPaymentHandler } from "@faremeter/payment-solana/exact";
import { wrap } from "@faremeter/fetch";
import bs58 from "bs58";

export const getkeypair = () => {
    const keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
    return keypair
}

export const getFetchWithPayerHandler = async () => {
    const keypair = getkeypair()
    const connection = new Connection(mcpConfig.rpcUrl, {
        commitment: "confirmed",
    });

    const usdcInfo = lookupKnownSPLToken(mcpConfig.clusterId, "USDC");

    if (!usdcInfo) {
        throw new Error("USDC token info not found");
    }

    const usdcMint = new PublicKey(usdcInfo.address);

    const wallet = {
        network: mcpConfig.clusterId,
        publicKey: keypair.publicKey,
        updateTransaction: async (tx: VersionedTransaction) => {
            tx.sign([keypair]);
            return tx;
        }
    };

    const handler = createPaymentHandler(wallet, usdcMint, connection);
    const fetchWithPayer = wrap(fetch, { handlers: [handler] });

    return fetchWithPayer;
}