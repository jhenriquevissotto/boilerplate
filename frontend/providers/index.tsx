import { MyDocument } from '~/view'
import * as IOC from './ioc'
import * as Main from './main'


export function Providers({ children }) {
    return (
        <MyDocument>
            <IOC.Provider>
                <Main.Provider>
                    {children}
                </Main.Provider>
            </IOC.Provider>
        </MyDocument>
    )
}