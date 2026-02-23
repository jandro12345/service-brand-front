'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useBrands } from '@/hooks/useBrands';
import { useCreateAsset } from '@/hooks/useAssets';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';

const assetSchema = z.object({
  brand_id: z.string().min(1, 'Selecciona una marca'),
  asset_type: z.string().min(1, 'Selecciona un tipo de asset'),
  instructions: z.string().optional(),
});

type AssetFormData = z.infer<typeof assetSchema>;

const ASSET_TYPES = ['Descripciones de producto', 'Guiones de video', 'Prompts de imagen'];

export default function AssetForm() {
  const { data: brandsData } = useBrands();
  const { mutate, isPending, data } = useCreateAsset();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetFormData>({
    resolver: zodResolver(assetSchema),
  });

  const onSubmit = (data: AssetFormData) => mutate(data);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Generar Asset Creativo</h2>

      {data?.data?.content && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
          <h3 className="font-semibold mb-2">✓ Asset Generado:</h3>
          <p className="text-sm whitespace-pre-wrap text-gray-700">{data.data.content}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Select
          label="Marca"
          {...register('brand_id')}
          error={errors.brand_id?.message}
          disabled={isPending}
        >
          <option value="">Selecciona una marca...</option>
          {brandsData?.data?.items?.map((brand: any) => (
            <option key={brand.brand_id} value={brand.brand_id}>
              {brand.brand_name}
            </option>
          ))}
        </Select>

        <Select
          label="Tipo de Asset"
          {...register('asset_type')}
          error={errors.asset_type?.message}
          disabled={isPending}
        >
          <option value="">Selecciona un tipo...</option>
          {ASSET_TYPES.map((type) => (
            <option key={type} value={type}>
              {type.replace(/_/g, ' ')}
            </option>
          ))}
        </Select>

        <Textarea
          label="Instrucciones"
          placeholder="Opcional - Agrega detalles específicos para guiar la generación del asset"
          {...register('instructions')}
          error={errors.instructions?.message}
          disabled={isPending}
          rows={6}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? '⏳ Generando...' : '✨ Generar Asset'}
        </Button>
      </form>
    </div>
  );
}
