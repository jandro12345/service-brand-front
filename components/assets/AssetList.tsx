'use client';

import { useState } from 'react';
import { Asset } from '@/types';
import Modal from '@/components/ui/Modal';

interface AssetListProps {
  assets: Asset[];
  isLoading: boolean;
}

export default function AssetList({ assets, isLoading }: AssetListProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  if (isLoading) {
    return <div className="text-center py-8">⏳ Cargando assets...</div>;
  }

  if (!assets || assets.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay assets aún</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <div
            key={asset.asset_id}
            onClick={() => setSelectedAsset(asset)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-lg">
                {asset.type}
              </span>

              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {asset.type}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {asset.content}
            </p>

            <div className="text-xs text-gray-500">
              {new Date(asset.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedAsset && (
      <Modal onClose={() => setSelectedAsset(null)}>
        <button
          onClick={() => setSelectedAsset(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {selectedAsset.type}
        </h2>

        <div className="space-y-3 text-sm">
          <p><strong>Marca:</strong> {selectedAsset.brand_name || '—'}</p>
          <p><strong>ID:</strong> {selectedAsset.asset_id}</p>
          <p><strong>Tipo:</strong> {selectedAsset.type}</p>
          <p>
            <strong>Creado:</strong>{' '}
            {new Date(selectedAsset.created_at).toLocaleString()}
          </p>

          <div>
            <strong>Contenido:</strong>
            <div className="mt-2 p-3 bg-gray-100 rounded whitespace-pre-wrap">
              {selectedAsset.content}
            </div>
          </div>
        </div>
      </Modal>
    )}
    </>
  );
}