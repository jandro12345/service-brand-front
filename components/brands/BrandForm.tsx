'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateBrand } from '@/hooks/useBrands';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const brandSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  briefing: z.string().min(10, 'El briefing debe tener al menos 10 caracteres'),
});

type BrandFormData = z.infer<typeof brandSchema>;

export default function BrandForm() {
  const { mutate, isPending, data } = useCreateBrand();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BrandFormData>({
    resolver: zodResolver(brandSchema),
  });

  const onSubmit = (data: BrandFormData) =>
  mutate({
    name: data.name,
    briefing: data.briefing,
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Crear Nueva Marca</h2>

      {data?.data?.manual && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
          <h3 className="font-semibold mb-2">✓ Manual Generado:</h3>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nombre de Marca"
          placeholder="ej: Nike"
          {...register('name')}
          error={errors.name?.message}
          disabled={isPending}
        />

        <Textarea
          label="Briefing"
          placeholder="Describe la identidad, valores y directrices de tu marca..."
          {...register('briefing')}
          error={errors.briefing?.message}
          disabled={isPending}
          rows={8}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? '⏳ Generando...' : '✨ Crear Marca'}
        </Button>
      </form>
    </div>
  );
}
