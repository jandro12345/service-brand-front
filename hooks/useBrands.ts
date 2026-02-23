'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { brandAPI } from '@/services/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useBrands = (page = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['brands', page, pageSize],
    queryFn: () => brandAPI.list(page, pageSize),
    staleTime: 30000,
  });
};

export const useCreateBrand = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { name: string; briefing: string }) => brandAPI.create(data),
    onSuccess: (data) => {
      toast.success('¡Marca creada exitosamente!');
      queryClient.invalidateQueries({ queryKey: ['brands'] });
      router.push('/brands');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.detail || 'Error al crear marca');
    },
  });
};
