import { Styles } from '~/src'
import { MyDocument } from '~/view'


export function Providers({ children }) {
    return (
        <MyDocument>
            <Styles.Global />
            {children}
        </MyDocument>
    )
}