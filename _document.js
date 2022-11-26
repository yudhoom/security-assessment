import crypto from 'crypto'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const cspHashOf = (text) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}
export default class MyDocument extends Document {
  render() {
    let csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self';connect-src 'self' ${process.env.NEXT_PUBLIC_ENV_JTLC} 'unsafe-eval';  script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
    )}`

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}