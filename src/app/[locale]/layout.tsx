import localFont from 'next/font/local';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { Header } from '@/components/Header';
import { Locale, i18n } from '@/i18n-config';

import background from '../../../assets/images/background.jpeg';

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
        <body className={`${manrope.variable} ${roboto.variable} p-[10px] bg-black`}>
          <div className="relative z-10 border h-full">
            <Header />
            {/* <video
              className="videoTag z-0 absolute w-full h-full left-0 object-fill"
              autoPlay
              loop
              muted
              playsInline>
              <source
                src="https://static.videezy.com/system/resources/previews/000/000/123/original/MVI_002613.mp4"
                type="video/mp4"
              />
            </video> */}
            {/* <MobileMenu /> */}
            <div className="absolute w-full h-[calc(100vh-23px)] opacity-30 ">
              <Image alt="picture of me" src={background} className="h-full object-cover" />
            </div>
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
