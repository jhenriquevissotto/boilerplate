const { pipe } = require('ramda')
const nextTranslate = require('next-translate')

const withExtensions = pipe(nextTranslate)

const nextConfig = withExtensions({
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
})

module.exports = nextConfig
