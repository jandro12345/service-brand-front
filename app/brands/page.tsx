'use client';

import Link from 'next/link';
import { useBrands } from '@/hooks/useBrands';
import BrandList from '@/components/brands/BrandList';
import Pagination from '@/components/ui/Pagination';
import Button from '@/components/ui/Button';
import { usePagination } from '@/hooks/usePagination';

export default function BrandsPage() {
  const { page, pageSize, goToPage, nextPage, prevPage } = usePagination();
  const { data, isLoading } = useBrands(page, pageSize);

  const brands = data?.data?.items || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🏢 Marcas</h1>
        <Link href="/brands/create">
          <Button>+ Crear Marca</Button>
        </Link>
      </div>

      <BrandList brands={brands} isLoading={isLoading} />

    </div>
  );
}
