import { useQuery } from '@tanstack/react-query';
import { ChogAPI } from 'src/modules/zerion-api/zerion-api.client';
import { type Params } from '../requests/asset-list-fungibles';

export function useAssetListFungibles(
  params: Params,
  { suspense = false }: { suspense?: boolean } = {}
) {
  return useQuery({
    queryKey: ['assetListFungibles', params],
    queryFn: () => ChogAPI.assetListFungibles(params),
    suspense,
    staleTime: 20000,
  });
}
