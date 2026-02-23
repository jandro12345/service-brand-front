'use client';

import { useMutation } from '@tanstack/react-query';
import { auditAPI } from '@/services/api';
import toast from 'react-hot-toast';

export const useAuditImage = () => {
  return useMutation({
    mutationFn: ({ brandId, file }: { brandId: string; file: File }) =>
      auditAPI.auditImage(brandId, file),
    onSuccess: () => {
      toast.success('¡Auditoría completada!');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.detail || 'Error en la auditoría');
    },
  });
};
