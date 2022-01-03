// const { compose } = require('ramda')
// const nextTranslate = require('next-translate')

// const withExtensions = compose(nextTranslate)

const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}

module.exports = nextConfig
