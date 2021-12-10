

export module Resolve {
    export type Params = any
    export type Return<D = any, E = any> = {
        isError: boolean
        data:    null | D,
        error:   null | E,
    }
}

export function resolve<D = any, E = any>(database: Resolve.Params) {
    return database.then(([data]: [D]) => {
        return ({
            isError: false,
            data,
            error: null,
        })
    }).catch((error: E) => {
        console.error(error)
        return ({
            isError: true,
            data: null,
            error,
        })
    }) as Promise<Resolve.Return<D, E>>
}
