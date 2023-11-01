import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { Locale, i18n } from '@/i18n-config';

import './globals.css';

import type { Metadata } from 'next';

const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope-ExtraBold.ttf',
      weight: '800',
      style: 'bold',
    },
    {
      path: './fonts/Manrope-Light.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-manrope',
});

const roboto = localFont({
  src: [
    {
      path: './fonts/RobotoFlex-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Portfolio Lisa-Lou Kara',
  description: 'Développeuse web - React/ React Native',
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${manrope.variable} ${roboto.variable}`}>
          <Header />
          <MobileMenu />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
