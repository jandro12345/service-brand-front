import Button from './Button';

interface PaginationProps {
  page: number;
  pageSize: number;
  total?: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToPage: (page: number) => void;
}

export default function Pagination({
  page,
  pageSize,
  total,
  onNext,
  onPrev,
  onGoToPage,
}: PaginationProps) {
  const totalPages = total ? Math.ceil(total / pageSize) : 0;

  return (
    <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 rounded-lg">
      <div className="text-sm text-gray-600">
        Página {page} {totalPages > 0 && `de ${totalPages}`}
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="secondary" onClick={onPrev} disabled={page === 1}>
          ← Anterior
        </Button>
        <Button size="sm" variant="secondary" onClick={onNext}>
          Siguiente →
        </Button>
      </div>
    </div>
  );
}
