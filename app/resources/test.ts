import { api, resources, libs } from '~/src'
import { Resources } from '~/src/types'


export module Test {
    export type Req = {
        params?: {}
        query?: { aaa: string, bbb: string }
        body?: {}
    }
    export type Res = {
        message: string
    }
}


export const test = {
    endpoint: (req: Resources.Test.Req) => {
        return `/test`
    },
    call: (req: Resources.Test.Req) => {
        const endpoint = resources.test.endpoint(req)
        const call = libs.helpers.response<Resources.Test.Res>(api.get(endpoint))
        return call
    }
}