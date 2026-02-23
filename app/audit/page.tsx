import ImageUploadZone from '@/components/audit/ImageUploadZone';
import RoleGuard from '@/components/auth/RoleGuard'

export default function AuditPage() {
  return (
    <RoleGuard allowedRoles={['admin', 'auditor']}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">✅ Auditor de Imágenes</h1>
        <ImageUploadZone />
      </div>
    </RoleGuard>
  );
}
