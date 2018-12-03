const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    baseUrl: './',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    css: {
        // modules:false,
        // extract:true,
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    }
};