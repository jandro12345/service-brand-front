'use client';

import Link from 'next/link';
import { useAssets } from '@/hooks/useAssets';
import AssetList from '@/components/assets/AssetList';
import Pagination from '@/components/ui/Pagination';
import Button from '@/components/ui/Button';
import { usePagination } from '@/hooks/usePagination';

export default function AssetsPage() {
  const { page, pageSize, goToPage, nextPage, prevPage } = usePagination();
  const { data, isLoading } = useAssets(page, pageSize);

  const assets = data?.data?.items || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🎨 Assets Creativos</h1>
        <Link href="/assets/create">
          <Button>+ Generar Asset</Button>
        </Link>
      </div>

      <AssetList assets={assets} isLoading={isLoading} />

    </div>
  );
}
