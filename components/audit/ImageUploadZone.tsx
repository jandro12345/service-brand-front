'use client';

import { useState } from 'react';
import { useAuditImage } from '@/hooks/useAudit';
import { useBrands } from '@/hooks/useBrands';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import AuditResults from './AuditResults';

export default function ImageUploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [brandId, setBrandId] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const { data: brandsData } = useBrands();
  const { mutate, isPending, data } = useAuditImage();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith('image/')) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleSubmit = () => {
    if (file && brandId) {
      mutate({ brandId, file });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="p-8 border-2 border-dashed border-blue-300 rounded-lg text-center cursor-pointer hover:bg-blue-50 transition"
      >
        {preview ? (
          <div>
            <img src={preview} alt="preview" className="w-32 h-32 mx-auto object-cover rounded mb-2" />
            <p className="text-green-600 font-semibold">✓ {file?.name}</p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold mb-2">📸 Arrastra tu imagen aquí</p>
            <p className="text-sm text-gray-500">o haz clic para seleccionar</p>
          </div>
        )}
      </div>

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

      <Button
        onClick={handleSubmit}
        disabled={!file || !brandId || isPending}
        className="w-full"
      >
        {isPending ? '⏳ Auditando...' : '✅ Auditar Imagen'}
      </Button>

      {data?.data && <AuditResults results={data.data} />}
    </div>
  );
}
