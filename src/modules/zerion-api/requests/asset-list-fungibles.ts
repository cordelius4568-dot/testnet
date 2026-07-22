import type { ClientOptions } from '../shared';
import { ChogHttpClient } from '../shared';
import type { Fungible } from '../types/Fungible';
import type { FungibleAssetsSortedBy } from '../types/FungibleAssetsSortedBy';
import type { ChogApiContext } from '../zerion-api-bare';

export interface Params {
  fungibleIds?: string[];
  currency?: string;
  sort?: FungibleAssetsSortedBy;
}

export interface Response {
  data: Fungible[];
  errors?: { title: string; detail: string }[];
}

export function assetListFungibles(
  this: ChogApiContext,
  params: Params,
  options?: ClientOptions
) {
  const endpoint = 'asset/list-fungibles/v1';
  const kyOptions = this.getKyOptions();
  return ChogHttpClient.post<Response>(
    { endpoint, body: JSON.stringify(params), ...options },
    kyOptions
  );
}
