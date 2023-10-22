const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    distDir: 'build',
    output: 'static',
    /*
    experimental: {
        appDir: true,
    },
    */
}
