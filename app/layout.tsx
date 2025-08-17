import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clouxis - Domine o Caos. Transforme Dados em Solução.',
  description: 'Soluções de TI que convertem complexidade em clareza. Especialistas em gestão de dados, infraestrutura cloud e segurança empresarial em Portugal.',
  keywords: 'TI Portugal, gestão de dados, cloud computing, segurança empresarial, infraestrutura tecnológica, Lisboa',
  authors: [{ name: 'Clouxis' }],
  creator: 'Clouxis',
  publisher: 'Clouxis',
  robots: 'index, follow',
  openGraph: {
    title: 'Clouxis - Ordem sob o Caos',
    description: 'Transformamos dados complexos em soluções claras para empresas portuguesas.',
    url: 'https://clouxis.pt',
    siteName: 'Clouxis',
    type: 'website',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clouxis - Domine o Caos. Transforme Dados em Solução.',
    description: 'Soluções de TI que convertem complexidade em clareza.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#C60606',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-montserrat antialiased">{children}</body>
    </html>
  );
}