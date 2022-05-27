import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useRef } from 'react'
import { LocomotiveScrollProvider as LSProvider } from 'react-locomotive-scroll'

import 'locomotive-scroll/dist/locomotive-scroll.css'
import '@/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <LSProvider
      options={{
        smooth: true,
        multiplier: .7,
        tablet: {
          breakpoint: 992
        }
      }}
      location={asPath}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <div className='main' data-scroll-container ref={containerRef}>
        <Component {...pageProps} />;
      </div>
    </LSProvider>
  );
}

export default MyApp
