import AssetForm from '@/components/assets/AssetForm';
import RoleGuard from '@/components/auth/RoleGuard'

export default function CreateAssetPage() {
  return (
    <RoleGuard allowedRoles={['admin', 'user']}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">✨ Generar Asset Creativo</h1>
        <AssetForm />
      </div>
    </RoleGuard>
  );
}
