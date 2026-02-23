'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAssets } from '@/hooks/useAssets';
import { useBrands } from '@/hooks/useBrands';
import AssetList from '@/components/assets/AssetList';
import Button from '@/components/ui/Button';
import RoleGuard from '@/components/auth/RoleGuard'


export default function AssetsPage() {

  const [brandId, setBrandId] = useState<string | undefined>(undefined);

  const { data, isLoading } = useAssets(1, 100, brandId);

  const { data: brandsData } = useBrands(1, 100);
  const assets = data?.data?.items || [];
  const brands = brandsData?.data?.items || [];
  
  return (
    <RoleGuard allowedRoles={['admin', 'user']}>
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">🎨 Assets Creativos</h1>
          <Link href="/assets/create">
            <Button>+ Generar Asset</Button>
          </Link>
        </div>

        {/* 🔎 Select de Marca */}
        <div className="flex gap-2">
          <select
            className="border p-2 rounded w-full"
            value={brandId || ''}
            onChange={(e) =>
              setBrandId(e.target.value || undefined)
            }
          >
            <option value="">Todas las marcas</option>
            {brands.map((brand: any) => (
              <option key={brand.brand_id} value={brand.brand_id}>
                {brand.brand_name}
              </option>
            ))}
          </select>
        </div>

        <AssetList assets={assets} isLoading={isLoading} />
      </div>
    </RoleGuard>
  );
}
