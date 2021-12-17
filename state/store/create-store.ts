import { packs, stores, Api } from '~/src'


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
