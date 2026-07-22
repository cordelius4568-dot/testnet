import type { ClientOptions } from '../shared';
import { ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';

interface Params {
  addresses: string[];
  chain: string;
}

interface Response {
  data: null;
  errors?: { title: string; detail: string }[];
}

export function registerChain(
  this: ChogApiContext,
  payload: Params,
  options?: ClientOptions
) {
  const { chain, addresses } = payload;
  const kyOptions = this.getKyOptions();
  return ChogHttpClient.post<Response>(
    {
      endpoint: 'wallet/connect-chain/v1',
      body: JSON.stringify({ chain, addresses }),
      ...options,
    },
    kyOptions
  );
}
