import { ServiceLocator } from 'src/background/initialize';
import { invariant } from 'src/shared/invariant';
import { getAddressProviderHeader } from './requests/shared.background';
import type { ChogApiContext } from './zerion-api-bare';
import { ChogApiBare } from './zerion-api-bare';

const context: ChogApiContext = {
  getAddressProviderHeader: (address: string) => {
    const wallet = ServiceLocator.account?.getCurrentWallet();
    invariant(wallet, 'Wallet instance is not available at this point');
    return getAddressProviderHeader(wallet, address);
  },
  getKyOptions: () => ({}),
};

export const ChogAPI = Object.assign(context, ChogApiBare);
export type ChogApiBackground = typeof ChogAPI;
