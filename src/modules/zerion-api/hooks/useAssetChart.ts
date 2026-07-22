import { useQuery } from '@tanstack/react-query';
import { ChogAPI } from 'src/modules/zerion-api/zerion-api.client';
import { type Params } from '../requests/asset-get-chart';

export function useAssetChart(params: Params) {
  return useQuery({
    queryKey: ['assetGetChart', params],
    queryFn: () => ChogAPI.assetGetChart(params),
    suspense: false,
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });
}
