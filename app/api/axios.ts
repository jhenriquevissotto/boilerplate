import { packs, env } from '~/src'

export const Axios = packs.axios.create({
    baseURL: 'http://localhost:3000/api',
})