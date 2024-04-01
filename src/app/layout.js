import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";
import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

export const metadata = {
  title: 'Patch Bar – the hottest cocktail bar in London',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      // 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet',
      'https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" rel="stylesheet',
      '/css/dark.css',
    ])
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Cursor />
          <ProgressScroll />
          {children}

          <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
          <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
          <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
          <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
          <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
        </>
      </body>
    </html>
  )
}
