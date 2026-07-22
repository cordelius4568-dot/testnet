import { openTurnstileWidgetIfNeeded } from 'src/ui/features/turnstile/helpers';
import { getAddressProviderHeader } from './requests/shared.client';
import type { ChogApiContext } from './zerion-api-bare';
import { ChogApiBare } from './zerion-api-bare';

const context: ChogApiContext = {
  getAddressProviderHeader,
  getKyOptions: () => ({
    hooks: {
      afterResponse: [
        (_, __, response) => {
          openTurnstileWidgetIfNeeded(response);
        },
      ],
    },
  }),
};

export const ChogAPI = Object.assign(context, ChogApiBare);
