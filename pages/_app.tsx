import "tailwindcss/tailwind.css";
import "@/styles/main.css";
import { Analytics } from '@vercel/analytics/react';

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Analytics />
    <Component {...pageProps} />;
  </>
  )

}
