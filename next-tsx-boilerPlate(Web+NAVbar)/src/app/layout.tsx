import '../styles/reset.css';
import '../styles/globals.css';
import clsx from 'clsx';
import Script from 'next/script';
import { NotoSans } from './fonts';
import Navigation from '@/components/navigation';

export const metadata = {
  title: {
    template: '%s | GDSC DGU',
    default: 'GDSC DGU',
  },
  description: 'Google Developer Student Clubs 동국대학교',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="flex w-screen justify-center  bg-[#fff]">
      <body
        className={clsx(
          [NotoSans.className],
          //  max-w-[430px] mx-auto : 430px 이상일 때 가운데 정렬
          ['min-h-screen w-full'],
          ['shadow-xl'],
          ['bg-[#050014]'],
          ['text-white'],
        )}
      >
        <Navigation />
        <div className="flex justify-center">{children}</div>
      </body>
    </html>
  );
}
