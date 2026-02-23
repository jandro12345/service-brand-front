import axios from 'axios';
import { Brand, Asset, AuditResult } from '@/types';
import { useAuthStore } from '@/stores/auth'



const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1.0';

export const apiClient = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Brands
export const brandAPI = {
  create: (data: { name: string; briefing: string }) =>
    apiClient.post('/brand/brands', data),
  list: (page = 1, pageSize = 10) =>
    apiClient.get('/brand/', { params: { page, page_size: pageSize } }),
};

// Assets
export const assetAPI = {
  create: (data: { brand_id: string; asset_type: string; instructions: string }) =>
    apiClient.post('/asset/creative', data),
  list: (page = 1, pageSize = 10, brand_id?: string, asset_type?: string) =>
    apiClient.get('/asset/', { params: { page, page_size: pageSize, brand_id, asset_type } }),
};

// Audit
export const auditAPI = {
  auditImage: (brandId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('brand_id', brandId);
    return apiClient.post('/audit-image/audit-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
