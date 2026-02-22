export interface Brand {
  id: string;
  name: string;
  manual: string;
  created_at: string;
}

export interface Asset {
  asset_id: string;
  brand_id: string;
  type: string;
  content: string;
  created_at: string;
}

export interface AuditResult {
  reason: string[];
  approved: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  page_size: number;
  total: number;
}
