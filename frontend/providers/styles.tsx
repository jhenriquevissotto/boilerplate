import { Assets } from '~/src'
import { MyDocument } from '~/view'

export function Providers({ children }) {
    return (
        <MyDocument>
            <Assets.Styles.Global />
            {children}
        </MyDocument>
    )
}
