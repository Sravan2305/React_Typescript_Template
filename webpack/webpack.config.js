const {merge}  = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (ENV) => {
        const {env} = ENV
        console.log({env,ENV})
        const envConfig  = require(`./webpack.${env}.js`)
        const config = merge(commonConfig , envConfig)
        return config;
}