import { normalizeAddress } from 'src/shared/normalizeAddress';
import { ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';

interface Params {
  address: string;
  signature: string;
}

interface Response {
  data: null;
  errors?: { title: string; detail: string }[];
}

export function claimRetro(this: ChogApiContext, params: Params) {
  const kyOptions = this.getKyOptions();
  return ChogHttpClient.post<Response>(
    {
      endpoint: 'wallet/claim-retro/v1',
      body: JSON.stringify({
        address: normalizeAddress(params.address),
        signature: params.signature,
      }),
    },
    kyOptions
  );
}
