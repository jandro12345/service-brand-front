import ImageUploadZone from '@/components/audit/ImageUploadZone';

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">✅ Auditor de Imágenes</h1>
      <ImageUploadZone />
    </div>
  );
}
