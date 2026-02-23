'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { assetAPI } from '@/services/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useAssets = (page = 1, pageSize = 10, brand_id?: string, asset_type?: string) => {
  return useQuery({
    queryKey: ['assets', page, pageSize, brand_id, asset_type],
    queryFn: () => assetAPI.list(page, pageSize, brand_id, asset_type),
    staleTime: 30000,
  });
};

export const useCreateAsset = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { brand_id: string; asset_type: string; instructions: string }) =>
      assetAPI.create(data),
    onSuccess: (data) => {
      toast.success('¡Asset generado exitosamente!');
      queryClient.invalidateQueries({ queryKey: ['assets'] });
      router.push('/assets');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.detail || 'Error al generar asset');
    },
  });
};
