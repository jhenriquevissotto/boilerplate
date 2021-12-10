import { packs } from '~/src'

export function Create({ tag, props, children }) {
    return packs.react.createElement(tag, props, children)
}

export function Clone({ props, children }) {
    return packs.react.cloneElement(props, children)
}