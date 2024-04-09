import { Bagel_Fat_One, Noto_Sans_KR } from 'next/font/google';

// 예시
export const BagelFatOne = Bagel_Fat_One({
  weight: '400',
  subsets: ['latin'],
  // https://github.com/vercel/next.js/issues/47115
  // ! fix - `Failed to find font override values for font `Bagel Fat One`
  adjustFontFallback: false,
});

export const NotoSans = Noto_Sans_KR({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});
