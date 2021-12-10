import { helpers, routes } from '~/src'

const next = new helpers.NextRouter()

routes.next.forEach(route => {
    next.add(route.pattern, route.page)
})

export { next }