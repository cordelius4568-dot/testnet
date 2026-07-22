import type { ClientOptions } from '../shared';
import { CLIENT_DEFAULTS, ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';
import type { ResponseBody } from './ResponseBody';

export interface Params {
  fungibleId: string;
  addresses: string[];
  currency: string;
}

export interface AssetAddressPnl {
  realizedPnl: number;
  unrealizedPnl: number;
  totalPnl: number;
  relativeRealizedPnl: number;
  relativeUnrealizedPnl: number;
  relativeTotalPnl: number;
  averageBuyPrice: number;
  bought: number;
}

type Response = ResponseBody<AssetAddressPnl | null>;

export async function assetGetFungiblePnl(
  this: ChogApiContext,
  params: Params,
  options: ClientOptions = CLIENT_DEFAULTS
) {
  const firstAddress = params.addresses[0];
  const provider = await this.getAddressProviderHeader(firstAddress);
  const kyOptions = this.getKyOptions();
  return ChogHttpClient.post<Response>(
    {
      endpoint: 'asset/get-fungible-pnl/v1',
      body: JSON.stringify(params),
      headers: { 'Chog-Wallet-Provider': provider },
      ...options,
    },
    kyOptions
  );
}
