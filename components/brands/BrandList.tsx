'use client';

import { useState } from 'react';
import { Brand } from '@/types';
import Modal from '@/components/ui/Modal';

interface BrandListProps {
  brands: Brand[];
  isLoading: boolean;
}

export default function BrandList({ brands, isLoading }: BrandListProps) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  if (isLoading) {
    return <div className="text-center py-8">⏳ Cargando marcas...</div>;
  }

  if (brands.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No hay marcas aún</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.brand_id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">
              {brand.brand_name}
            </h3>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {new Date(brand.created_at).toLocaleDateString()}
              </span>

              <button
                onClick={() => setSelectedBrand(brand)}
                className="text-blue-600 text-sm hover:underline"
              >
                Ver →
              </button>
            </div>
          </div>
        ))}
      </div>

    {selectedBrand && (
      <Modal onClose={() => setSelectedBrand(null)}>
        
        <button
          onClick={() => setSelectedBrand(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {selectedBrand.brand_name}
        </h2>

        <div className="space-y-4 text-sm">

          <p>
            <strong>ID:</strong> {selectedBrand.brand_id}
          </p>

          <p>
            <strong>Creado:</strong>{' '}
            {new Date(selectedBrand.created_at).toLocaleString()}
          </p>

          {selectedBrand.manual && (
            <div className="mt-6">
              <h3 className="font-semibold mb-4 text-base">
                📘 Manual de Marca
              </h3>

              <div className="bg-gray-100 p-4 rounded-xl space-y-5">

                {selectedBrand.manual.mission && (
                  <div>
                    <strong>Misión:</strong>
                    <p className="mt-1 text-gray-700">
                      {selectedBrand.manual.mission}
                    </p>
                  </div>
                )}

                {selectedBrand.manual.vision && (
                  <div>
                    <strong>Visión:</strong>
                    <p className="mt-1 text-gray-700">
                      {selectedBrand.manual.vision}
                    </p>
                  </div>
                )}

                {selectedBrand.manual.positioning && (
                  <div>
                    <strong>Posicionamiento:</strong>
                    <p className="mt-1 text-gray-700">
                      {selectedBrand.manual.positioning}
                    </p>
                  </div>
                )}

                {selectedBrand.manual.tone && (
                  <div>
                    <strong>Tono:</strong>
                    <p className="mt-1 text-gray-700">
                      {selectedBrand.manual.tone}
                    </p>
                  </div>
                )}

                {/* VALUES (ARRAY) */}
                {Array.isArray(selectedBrand.manual.values) && (
                  <div>
                    <strong>Valores:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                      {selectedBrand.manual.values.map((value: string, index: number) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* MESSAGING PILLARS (ARRAY) */}
                {Array.isArray(selectedBrand.manual.messaging_pillars) && (
                  <div>
                    <strong>Messaging Pillars:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                      {selectedBrand.manual.messaging_pillars.map((pillar: string, index: number) => (
                        <li key={index}>{pillar}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* DO NOT (ARRAY) */}
                {Array.isArray(selectedBrand.manual.do_not) && (
                  <div>
                    <strong>No hacer:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                      {selectedBrand.manual.do_not.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </Modal>
    )}
    </>
  );
}