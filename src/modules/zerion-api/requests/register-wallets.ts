import type { ClientOptions } from '../shared';
import { ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';

interface Params {
  addresses: string[];
}

interface Response {
  data: null;
  errors?: { title: string; detail: string }[];
}

export function registerAddresses(
  this: ChogApiContext,
  payload: Params,
  options?: ClientOptions
) {
  const kyOptions = this.getKyOptions();
  return ChogHttpClient.post<Response>(
    {
      endpoint: 'wallet/import/v1',
      body: JSON.stringify({ addresses: payload.addresses }),
      ...options,
    },
    kyOptions
  );
}
