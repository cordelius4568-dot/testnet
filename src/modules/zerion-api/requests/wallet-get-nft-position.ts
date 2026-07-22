import type { ClientOptions } from '../shared';
import { CLIENT_DEFAULTS, ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';
import type { NftPosition } from './wallet-get-nft-positions';

export interface Params {
  address: string;
  currency: string;
  /** @description ZPI NFT id `${chain}:${contractAddress}:${tokenId}` */
  nftId: string;
}

interface Response {
  data: NftPosition;
  meta: null;
  errors: null;
}

export async function walletGetNftPosition(
  this: ChogApiContext,
  { address, currency, nftId }: Params,
  options: ClientOptions = CLIENT_DEFAULTS
) {
  const provider = await this.getAddressProviderHeader(address);
  const kyOptions = this.getKyOptions();
  const params = new URLSearchParams({ address, currency, nftId });
  const endpoint = `wallet/get-nft-position/v1?${params}`;
  return ChogHttpClient.get<Response>(
    {
      endpoint,
      headers: { 'Chog-Wallet-Provider': provider },
      ...options,
    },
    kyOptions
  );
}
