'use client';

import { useState, useRef } from 'react';
import { useAuditImage } from '@/hooks/useAudit';
import { useBrands } from '@/hooks/useBrands';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import AuditResults from './AuditResults';

export default function ImageUploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [brandId, setBrandId] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: brandsData } = useBrands();
  const { mutate, isPending, data } = useAuditImage();

  const MAX_SIZE_MB = 5;

  const handleFile = (selectedFile: File | undefined) => {
    setError(null);

    if (!selectedFile) return;

    // Validar tipo
    if (!selectedFile.type.startsWith('image/')) {
      setError('Solo se permiten archivos de imagen.');
      return;
    }

    // Validar tamaño
    const sizeInMB = selectedFile.size / (1024 * 1024);
    if (sizeInMB > MAX_SIZE_MB) {
      setError(`La imagen no puede superar ${MAX_SIZE_MB}MB.`);
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(selectedFile);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = () => {
    if (file && brandId) {
      mutate({ brandId, file });
    }
  };

  const removeImage = () => {
    setFile(null);
    setPreview(null);
    setError(null);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Drop Zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="p-8 border-2 border-dashed border-blue-300 rounded-lg text-center cursor-pointer hover:bg-blue-50 transition"
      >
        {preview ? (
          <div>
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 mx-auto object-cover rounded mb-2"
            />
            <p className="text-green-600 font-semibold mb-2">
              ✓ {file?.name}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="text-sm text-red-500 hover:underline"
            >
              Quitar imagen
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold mb-2">
              📸 Arrastra tu imagen aquí
            </p>
            <p className="text-sm text-gray-500">
              o haz clic para seleccionar (máx {MAX_SIZE_MB}MB)
            </p>
          </div>
        )}
      </div>

      {/* Input oculto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-100 text-red-600 rounded text-sm">
          {error}
        </div>
      )}

      {/* Selector de marca */}
      <Select
        label="Marca"
        value={brandId}
        onChange={(e) => setBrandId(e.target.value)}
      >
        <option value="">Selecciona una marca...</option>
        {brandsData?.data?.items?.map((brand: any) => (
          <option key={brand.brand_id} value={brand.brand_id}>
            {brand.brand_name}
          </option>
        ))}
      </Select>

      {/* Botón */}
      <Button
        onClick={handleSubmit}
        disabled={!file || !brandId || isPending}
        className="w-full"
      >
        {isPending ? '⏳ Auditando...' : '✅ Auditar Imagen'}
      </Button>

      {/* Resultados */}
      {data?.data && <AuditResults results={data.data} />}
    </div>
  );
}