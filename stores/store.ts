'use client';

import { create } from 'zustand';
import { Brand } from '@/types';

interface Store {
  selectedBrand: Brand | null;
  setSelectedBrand: (brand: Brand | null) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>((set) => ({
  selectedBrand: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
