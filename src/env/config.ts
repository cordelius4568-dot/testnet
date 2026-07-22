import { createUrl } from 'src/shared/createUrl';
import { invariant } from 'src/shared/invariant';
import type { Platform } from 'src/shared/platform';
import { ensureSupportedPlatform } from 'src/shared/platform';

function backendUrl(url: string, backend_env?: string | undefined): string;
function backendUrl(url: string | undefined, backend_env?: string | undefined): string | undefined;
function backendUrl(url: string | undefined, backend_env: string | undefined) {
  if (url) {
    return createUrl({
      base: url,
      pathname: '',
      searchParams: backend_env ? { backend_env } : undefined,
    }).toString();
  }
}

export const BACKEND_ENV = process.env.BACKEND_ENV || undefined; // deliberately fallback to undefined
invariant(process.env.DEFI_SDK_API_TOKEN, 'DEFI_SDK_API_TOKEN is required in env');
export const DEFI_SDK_API_TOKEN = process.env.DEFI_SDK_API_TOKEN;
invariant(process.env.DEFI_SDK_API_URL, 'DEFI_SDK_API_URL is required in env');
export const DEFI_SDK_API_URL = backendUrl(process.env.DEFI_SDK_API_URL, BACKEND_ENV);
invariant(process.env.DEFI_SDK_TESTNET_API_URL, 'DEFI_SDK_TESTNET_API_URL is required in env');
export const DEFI_SDK_TESTNET_API_URL = backendUrl(process.env.DEFI_SDK_TESTNET_API_URL, BACKEND_ENV);
invariant(process.env.CHOG_API_URL, 'CHOG_API_URL is required in env');
export const CHOG_API_URL = backendUrl(process.env.CHOG_API_URL, BACKEND_ENV);
invariant(process.env.CHOG_TESTNET_API_URL, 'CHOG_TESTNET_API_URL is required in env');
export const CHOG_TESTNET_API_URL = backendUrl(process.env.CHOG_TESTNET_API_URL, BACKEND_ENV);
invariant(process.env.DEFI_SDK_TRANSACTIONS_API_URL, 'DEFI_SDK_TRANSACTIONS_API_URL is required in env');
export const DEFI_SDK_TRANSACTIONS_API_URL = backendUrl(process.env.DEFI_SDK_TRANSACTIONS_API_URL, BACKEND_ENV);

invariant(process.env.PROXY_URL, 'PROXY_URL is required in env');
export const PROXY_URL = process.env.PROXY_URL;
export const MIXPANEL_TOKEN_PUBLIC = process.env.MIXPANEL_TOKEN_PUBLIC;
export const STATSIG_API_KEY = process.env.STATSIG_API_KEY;
export const FEATURE_LOYALTY_FLOW = process.env.FEATURE_LOYALTY_FLOW === 'on' ? 'on' : null; // avoid accidental false-positives for truthy "off"
export const FEATURE_SOLANA = process.env.FEATURE_SOLANA === 'on' ? 'on' : null; // avoid accidental false-positives for truthy "off"
export const SLOW_MODE = false;
export const GOOGLE_ANALYTICS_MEASUREMENT_ID = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;
export const GOOGLE_ANALYTICS_API_SECRET = process.env.GOOGLE_ANALYTICS_API_SECRET;

export const PLATFORM = (process.env.PLATFORM || 'chrome') as Platform;
ensureSupportedPlatform(PLATFORM);

invariant(process.env.MONAD_MAINNET_RPC_URL, 'MONAD_MAINNET_RPC_URL is required in env');
export const MONAD_MAINNET_RPC_URL = process.env.MONAD_MAINNET_RPC_URL;
invariant(process.env.MONAD_MAINNET_CHAIN_ID, 'MONAD_MAINNET_CHAIN_ID is required in env');
export const MONAD_MAINNET_CHAIN_ID = Number(process.env.MONAD_MAINNET_CHAIN_ID);
invariant(process.env.MONAD_MAINNET_EXPLORER_URL, 'MONAD_MAINNET_EXPLORER_URL is required in env');
export const MONAD_MAINNET_EXPLORER_URL = process.env.MONAD_MAINNET_EXPLORER_URL;

invariant(process.env.MONAD_TESTNET_RPC_URL, 'MONAD_TESTNET_RPC_URL is required in env');
export const MONAD_TESTNET_RPC_URL = process.env.MONAD_TESTNET_RPC_URL;
invariant(process.env.MONAD_TESTNET_CHAIN_ID, 'MONAD_TESTNET_CHAIN_ID is required in env');
export const MONAD_TESTNET_CHAIN_ID = Number(process.env.MONAD_TESTNET_CHAIN_ID);
invariant(process.env.MONAD_TESTNET_EXPLORER_URL, 'MONAD_TESTNET_EXPLORER_URL is required in env');
export const MONAD_TESTNET_EXPLORER_URL = process.env.MONAD_TESTNET_EXPLORER_URL;
