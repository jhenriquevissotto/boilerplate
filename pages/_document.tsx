import { ServerStyleSheet } from 'styled-components'
import { packs } from '~/src'
import { Packs } from '~/src/types'



export default class MyDocument extends packs.next.Document {
  static async getInitialProps(ctx: Packs.Next.DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

        const initialProps = await packs.next.Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        }
    } finally {
        sheet.seal()
    }
  }
}