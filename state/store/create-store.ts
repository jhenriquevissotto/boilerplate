import { packs, stores, Api } from '~/src'
import { Store } from '~/src/types'


export function createStore() {
    return packs.redux.configureStore({
        reducer: ({
            [Api.Redux.reducerPath]: Api.Redux.reducer,
            [stores.counter.name]: stores.counter.slice.reducer,
        }),
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat([Api.Redux.middleware])
        }
    })
}
