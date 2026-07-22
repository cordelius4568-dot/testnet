import { useQuery } from '@tanstack/react-query';
import { ChogAPI } from 'src/modules/zerion-api/zerion-api.client';
import { type Params } from '../requests/asset-get-receive-fungibles';

export function useReceiveFungibles(params: Params) {
  return useQuery({
    queryKey: ['assetGetReceiveFungibles', params],
    queryFn: () => ChogAPI.assetGetReceiveFungibles(params),
    staleTime: 20000,
    suspense: false,
  });
}
