const nextTranslate = require('next-translate')


const nextConfig = nextTranslate({
	webpack: (config) => {
		config.resolve.fallback = { fs: false }
		config.rules.push({
			test: /\.js$/,
			use: {
				loader: '@sucrase/webpack-loader',
				options: { transforms: ['jsx'] }
			}
		})
		return config
	},
})


module.exports = nextConfig