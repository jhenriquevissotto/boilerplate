import { store, packs } from '~/src'


export function State({ children }) {
    return (
        <packs.redux.Provider store={store}>
            {children}
        </packs.redux.Provider>
    )
}