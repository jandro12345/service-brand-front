export interface Brand {
  brand_id: string;
  brand_name: string;
  manual: BrandManual | null;
  created_at: string;
}

export interface Asset {
  asset_id: string;
  brand_name: string;
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

export type BrandManual = {
  mission: string;
  vision: string;
  values: string[];
  tone: string;
  do_not: string[];
  positioning: string;
  messaging_pillars: string[];
};