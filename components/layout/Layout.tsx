'use client'

import Header from './Header';
import Sidebar from './Sidebar';
import { useAuthStore } from '@/stores/auth';
import LoginForm from '@/components/login/LoginForm';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}