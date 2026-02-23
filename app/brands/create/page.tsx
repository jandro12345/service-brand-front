import BrandForm from '@/components/brands/BrandForm';
import RoleGuard from '@/components/auth/RoleGuard'

export default function CreateBrandPage() {
  return (
    <RoleGuard allowedRoles={['admin']}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">📝 Crear Nueva Marca</h1>
        <BrandForm />
      </div>
    </RoleGuard>
  );
}
