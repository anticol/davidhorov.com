import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/ico" href="/static/favicon/favicon.ico" />
          
          {/* Preconnect to Google Fonts for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Preconnect to CDN domains for faster image loading */}
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          
          {/* Critical font preload - only load weights needed for hero (700 for heading) */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HwyPRsSZZIneh-waA.woff2"
            crossOrigin="anonymous"
          />
          
          {/* Load full font stylesheet with display=swap for fast text rendering */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap"
          />
          
          {/* Critical CSS for above-the-fold content - reduces FCP/LCP */}
          <style dangerouslySetInnerHTML={{ __html: `
            body { 
              font-family: 'Be Vietnam Pro', system-ui, sans-serif;
              background: #000a1f;
              color: white;
              margin: 0;
            }
            .heroTitle {
              font-weight: 700;
              line-height: 1.1;
            }
            .gradient-text {
              background: linear-gradient(135deg, #00c7ff 0%, #00ffcc 50%, #00c7ff 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
