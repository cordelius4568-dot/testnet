import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePreferences } from 'src/ui/features/preferences';
import { walletPort } from 'src/ui/shared/channels';
import { Button } from 'src/ui/ui-kit/Button';
import { UIText } from 'src/ui/ui-kit/UIText';
import { UnstyledLink } from 'src/ui/ui-kit/UnstyledLink';
import { VStack } from 'src/ui/ui-kit/VStack';

export function EmptyPositionsViewLegacy() {
  const { data: wallet } = useQuery({
    queryKey: ['wallet/uiGetCurrentWallet'],
    queryFn: () => {
      return walletPort.request('uiGetCurrentWallet');
    },
  });

  const { preferences } = usePreferences();

  const isTestnetMode = preferences?.testnetMode?.on;

  if (isTestnetMode || !wallet) {
    return (
      <VStack gap={6} style={{ textAlign: 'center', padding: 20 }}>
        <UIText kind="headline/hero">🥺</UIText>
        <UIText kind="small/accent" color="var(--neutral-500)">
          No assets yet
        </UIText>
      </VStack>
    );
  }

  return (
    <VStack
      gap={16}
      style={{
        justifyItems: 'stretch',
        paddingInline: 16,
        textAlign: 'center',
        paddingBottom: 48,
      }}
    >
      <VStack gap={12} style={{ justifyItems: 'center' }}>
        <img
          alt="Empty Wallet Cover"
          src="https://cdn.zerion.io/images/dna-assets/empty-wallet-img.png"
          srcSet="https://cdn.zerion.io/images/dna-assets/empty-wallet-img.png, https://cdn.zerion.io/images/dna-assets/empty-wallet-img_2x.png 2x"
          style={{ height: 64 }}
        />
        <VStack gap={0}>
          <UIText kind="headline/h3">Fund your wallet</UIText>
          <UIText kind="body/regular" color="var(--neutral-600)">
            Transfer crypto to get started
          </UIText>
        </VStack>
      </VStack>
      <VStack gap={8}>
        <Button
          size={48}
          kind="primary"
          as={UnstyledLink}
          to={`/receive?address=${wallet.address}`}
        >
          Receive from Another Wallet
        </Button>
      </VStack>
    </VStack>
  );
}
