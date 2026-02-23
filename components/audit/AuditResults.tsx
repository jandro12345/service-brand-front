'use client';

import { AuditResult } from '@/types';

interface AuditResultsProps {
  results: AuditResult;
}

export default function AuditResults({ results }: AuditResultsProps) {
  const statusColor = {
    true: 'bg-green-100 text-green-800',
    false: 'bg-red-100 text-red-800',
  };
  console.log('AuditResults', results);

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold">📊 Resultados de Auditoría</h2>

      <div className={`p-4 rounded-lg ${statusColor[results.approved]}`}>
        <p className="font-semibold">Estado: {results.approved ? '✅' : '❌'}</p>
        <p className="text-2xl font-bold mt-2">{results.reason}</p>
      </div>
    </div>
  );
}
