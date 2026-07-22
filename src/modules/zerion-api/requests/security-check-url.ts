import type { ClientOptions } from '../shared';
import { ChogHttpClient } from '../shared';
import type { ChogApiContext } from '../zerion-api-bare';

interface Params {
  url: string;
}

interface Response {
  data: {
    maliciousScore: number;
    flags: {
      isMalicious: boolean;
    };
  } | null;
  errors?: { title: string; detail: string }[];
}

export function securityCheckUrl(
  this: ChogApiContext,
  payload: Params,
  options?: ClientOptions
) {
  const params = new URLSearchParams({ url: payload.url });
  const kyOptions = this.getKyOptions();
  const endpoint = `security/check-url/v1?${params}`;
  return ChogHttpClient.get<Response>({ endpoint, ...options }, kyOptions);
}
