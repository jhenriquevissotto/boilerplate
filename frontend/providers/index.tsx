import { MyDocument } from '~/view'
import * as IOC from './ioc'
import * as Main from './main'
import * as Styles from './styles'


export function Providers({ children }) {
    return (
        <MyDocument>
            <IOC.Provider>
                <Main.Provider>
                    <Styles.Providers>
                        {children}
                    </Styles.Providers>
                </Main.Provider>
            </IOC.Provider>
        </MyDocument>
    )
}