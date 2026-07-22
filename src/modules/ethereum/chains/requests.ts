import type { NetworkConfig } from 'src/modules/networks/NetworkConfig';
import { SUPPORTED_NETWORKS } from 'src/modules/networks/networks-api';
import { Networks } from 'src/modules/networks/Networks';

/**
 * The remote chain-list API is no longer used. This build only ever knows
 * about the fixed Monad network set (sourced from env-configured RPC/explorer
 * URLs), so "searching" just filters that local list.
 */
export async function getNetworksBySearch({
  query,
  includeTestnets,
}: {
  query: string;
  client?: unknown;
  includeTestnets: boolean;
}): Promise<NetworkConfig[]> {
  const q = query.trim().toLowerCase();
  return SUPPORTED_NETWORKS.filter((network) => {
    if (!includeTestnets && network.is_testnet) {
      return false;
    }
    if (!q) {
      return true;
    }
    return (
      network.name.toLowerCase().includes(q) ||
      network.id.toLowerCase().includes(q) ||
      String(Networks.getChainId(network)).includes(q)
    );
  });
}
