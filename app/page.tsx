'use client';

import Link from 'next/link';
import { useBrands } from '@/hooks/useBrands';
import { useAssets } from '@/hooks/useAssets';

export default function Dashboard() {
  const { data: brandsData, isLoading: brandsLoading } = useBrands(1, 100);
  const { data: assetsData, isLoading: assetsLoading } = useAssets(1, 100);

  const brands = brandsData?.data?.items || [];
  const assets = assetsData?.data?.items || [];
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">🎨 Dashboard</h1>
        <p className="text-gray-600">Bienvenido a Brand Governance AI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <p className="text-sm text-gray-600">Total de Marcas</p>
          <p className="text-3xl font-bold text-blue-600">{brands.length}</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <p className="text-sm text-gray-600">Total de Assets</p>
          <p className="text-3xl font-bold text-green-600">{assets.length}</p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">📌 Últimas Marcas</h2>
          {brandsLoading ? (
            <p className="text-gray-500">⏳ Cargando...</p>
          ) : brands.length > 0 ? (
            <div className="space-y-2">
              {brands.slice(0, 3).map((brand: any) => (
                <p key={brand.brand_id} className="text-sm text-gray-700">
                  • {brand.brand_name}
                </p>
              ))}
              <Link href="/brands" className="text-blue-600 mt-4 inline-block text-sm hover:underline">
                Ver todas →
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No hay marcas aún</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">🎨 Últimos Assets</h2>
          {assetsLoading ? (
            <p className="text-gray-500">⏳ Cargando...</p>
          ) : assets.length > 0 ? (
            <div className="space-y-2">
              {assets.slice(0, 3).map((asset: any) => (
                <p key={asset.asset_id} className="text-sm text-gray-700">
                  • {asset.type}
                </p>
              ))}
              <Link href="/assets" className="text-blue-600 mt-4 inline-block text-sm hover:underline">
                Ver todos →
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No hay assets aún</p>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Comienza aquí</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/brands/create"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            → Crear Marca
          </Link>
          <Link
            href="/assets/create"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            → Generar Asset
          </Link>
        </div>
      </div>
    </div>
  );
}
