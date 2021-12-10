import { packs } from '~/src'

export const Redux = packs.redux.createApi({
    reducerPath: 'ApiRedux',
    baseQuery: packs.redux.fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        test: builder.query({
            query: () => `/test`,
        }),
    }),
})  