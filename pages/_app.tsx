import { Providers } from '~/src'
import { Packs } from '~/src/types'


export default function MyApp({ Component: Page, pageProps }: Packs.Next.AppProps) {
    return (
        <Providers>
            <Page {...pageProps} />
        </Providers>
    )
}