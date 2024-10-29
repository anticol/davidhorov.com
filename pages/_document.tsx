import Document, { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/ico" href="/static/favicon/favicon.ico" />
        </Head>
        <body>
          <Analytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
