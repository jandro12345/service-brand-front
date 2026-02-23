import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Brand Governance AI',
  description: 'Plataforma de gobernanza de marca impulsada por IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
