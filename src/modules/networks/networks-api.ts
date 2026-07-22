import {
  MONAD_MAINNET_RPC_URL,
  MONAD_MAINNET_CHAIN_ID,
  MONAD_MAINNET_EXPLORER_URL,
  MONAD_TESTNET_RPC_URL,
  MONAD_TESTNET_CHAIN_ID,
  MONAD_TESTNET_EXPLORER_URL,
} from 'src/env/config';
import type { NetworkConfig } from './NetworkConfig';
import { Networks } from './Networks';

const MONAD_MAINNET: NetworkConfig = {
  id: 'monad',
  name: 'Monad',
  icon_url: 'https://chain-icons.s3.amazonaws.com/monad.png',
  is_testnet: false,
  standard: 'eip155',
  specification: {
    eip155: {
      id: MONAD_MAINNET_CHAIN_ID,
      eip1559: true,
    },
  },
  native_asset: {
    id: 'mon',
    address: null,
    name: 'Monad',
    symbol: 'MON',
    icon_url: null,
    decimals: 18,
  },
  wrapped_native_asset: null,
  rpc_url_internal: MONAD_MAINNET_RPC_URL,
  rpc_url_public: [MONAD_MAINNET_RPC_URL],
  explorer_name: 'Monad Explorer',
  explorer_token_url: `${MONAD_MAINNET_EXPLORER_URL}/token/{ADDRESS}`,
  explorer_address_url: `${MONAD_MAINNET_EXPLORER_URL}/address/{ADDRESS}`,
  explorer_tx_url: `${MONAD_MAINNET_EXPLORER_URL}/tx/{HASH}`,
  explorer_home_url: MONAD_MAINNET_EXPLORER_URL,
  explorer_urls: [MONAD_MAINNET_EXPLORER_URL],
  supports_sending: true,
  supports_trading: false,
  supports_bridging: false,
  supports_actions: true,
  supports_positions: true,
  supports_nft_positions: true,
  supports_sponsored_transactions: false,
  supports_simulations: false,
};

const MONAD_TESTNET: NetworkConfig = {
  id: 'monad-testnet',
  name: 'Monad Testnet',
  icon_url: 'https://chain-icons.s3.amazonaws.com/monad.png',
  is_testnet: true,
  standard: 'eip155',
  specification: {
    eip155: {
      id: MONAD_TESTNET_CHAIN_ID,
      eip1559: true,
    },
  },
  native_asset: {
    id: 'mon-testnet',
    address: null,
    name: 'Monad',
    symbol: 'MON',
    icon_url: null,
    decimals: 18,
  },
  wrapped_native_asset: null,
  rpc_url_internal: MONAD_TESTNET_RPC_URL,
  rpc_url_public: [MONAD_TESTNET_RPC_URL],
  explorer_name: 'Monad Testnet Explorer',
  explorer_token_url: `${MONAD_TESTNET_EXPLORER_URL}/token/{ADDRESS}`,
  explorer_address_url: `${MONAD_TESTNET_EXPLORER_URL}/address/{ADDRESS}`,
  explorer_tx_url: `${MONAD_TESTNET_EXPLORER_URL}/tx/{HASH}`,
  explorer_home_url: MONAD_TESTNET_EXPLORER_URL,
  explorer_urls: [MONAD_TESTNET_EXPLORER_URL],
  supports_sending: true,
  supports_trading: false,
  supports_bridging: false,
  supports_actions: true,
  supports_positions: true,
  supports_nft_positions: true,
  supports_sponsored_transactions: false,
  supports_simulations: false,
};

export const SUPPORTED_NETWORKS: NetworkConfig[] = [
  MONAD_MAINNET,
  MONAD_TESTNET,
];

/**
 * This wallet build only supports the Monad network (mainnet + testnet).
 * We no longer query the remote chain list — we always resolve to this
 * fixed set of networks, filtered by whatever the caller asked for.
 */
export function getNetworks({
  ids,
  include_testnets,
}: {
  ids: string[] | null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  client?: unknown;
  include_testnets: boolean;
  supported_only?: boolean;
}): Promise<NetworkConfig[]> {
  let result = SUPPORTED_NETWORKS;
  if (!include_testnets) {
    result = result.filter((network) => !network.is_testnet);
  }
  if (ids) {
    const idSet = new Set(ids);
    result = result.filter((network) => idSet.has(network.id));
  }
  return Promise.resolve(result);
}

export async function getNetworkByChainId(chainId: string, _client?: unknown) {
  const network = SUPPORTED_NETWORKS.find(
    (item) => Networks.getChainId(item) === chainId
  );
  return network || null;
}
