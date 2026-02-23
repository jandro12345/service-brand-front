'use client';

import Link from 'next/link';
import { useBrands } from '@/hooks/useBrands';
import BrandList from '@/components/brands/BrandList';
import Button from '@/components/ui/Button';
import RoleGuard from '@/components/auth/RoleGuard'

export default function BrandsPage() {
  const { data, isLoading } = useBrands(1, 100);

  const brands = data?.data?.items || [];

  return (
    <RoleGuard allowedRoles={['admin']}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">🏢 Marcas</h1>
          <Link href="/brands/create">
            <Button>+ Crear Marca</Button>
          </Link>
        </div>

        <BrandList brands={brands} isLoading={isLoading} />

      </div>
    </RoleGuard>
  );
}
