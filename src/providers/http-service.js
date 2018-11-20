import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://bird.ioliu.cn/v2/?url=https://api.douban.com/v2';

// http request拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-type': 'application/x-www-form-urlencoded'
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截 <=> 异常处理
axios.interceptors.response.use(response => {
    return response;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log('错误请求');
                break;
            case 401:
                console.log('未授权，请重新登陆');
                break;
            case 403:
                console.log('拒绝访问');
                break;
            case 404:
                console.log('请求错误，未找到该资源');
                break;
            case 405:
                console.log('请求方法未被允许');
                break;
            case 408:
                console.log('请求超时');
                break;
            case 500:
                console.log('服务端出错');
                break;
            case 501:
                console.log('网络未实现');
                break;
            case 502:
                console.log('网络错误');
                break;
            case 503:
                console.log('服务不可用');
                break;
            case 504:
                console.log('网络超时');
                break;
            case 505:
                console.log('http版本不支持该请求');
                break;
            default:
                console.log(`连接错误${err.response.status}`)
        }
    } else {
        console.log('连接服务器失败');
    }
    return Promise.reject(err.response);
});

/**
 *  封装get方法
 *  @param url
 *  @param data
 *  @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 *  封装post请求
 *  @param url
 *  @param data
 *  @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 *  封装patch请求
 *  @param url
 *  @param data
 *  @param {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装jsonp请求
 * 有问号就会有查询字符串，直接在后面加&和转化后的字符串
 * 没有问号直接在后面加?和转化后的字符串
 */
export function jsonp(url, options = {}) {
    return new Promise(resolve => {
        /**
         * @params url
         * @param options
         * @returns {Promise}
         *
         * callbackId：随机生成的callbackId
         * container：获取head头
         * scriptNode：创建script节点
         *
         */
        let callbackId = `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`,
            container = document.getElementsByTagName('head')[0],
            scriptNode = document.createElement('script'),
            params = [];
        scriptNode.type = 'text/javascript';
        container.appendChild(scriptNode);
        /**
         *  加上callback参数，服务端接口数据根据callback返回函数
         */
        options['callback'] = callbackId;
        /**
         *  遍历参数,把参数组成数组[name=zhangsan,age:18]
         */
        for (let key in options) {
            params.push(key + '=' + options[key]);
        }
        /**
         *  判断原url是否已经有‘？’，如有给url拼接‘&’，否则拼接‘？’
         */
        url += (/\?/.test(url)) ? '&' : '?';
        url += params.join('&');
        /**
         *  设置script节点id以便后面删除
         */
        scriptNode.id = callbackId;
        scriptNode.src = url;
        /**
         * 定义全局函数，注意函数名是callbackId是跟上面定义的参数data["callback"]=callbackId是一致的
         * 服务端接口是根据客户端传的callback而返回callbackId
         * ({"code":0,"error":"操作成功","data":{}})
         *
         * 当客服端请求接口时即调用了函数callbackId
         * ({"code":0,"error":"操作成功","data":{}})，
         * 刚好是这里我们定义的全局函数，于是就拿到了数据response
         * */
        window[callbackId] = function (response) {
            resolve(response);
            container.removeChild(document.getElementById(callbackId));
        };
    })
}

/**
 *  下面是获取数据的接口
 */

export const server = {

    host: 'https://m.douban.com/rexxar/api/v2/subject_collection/',
    /**
     *  接口：影院热映
     *  名称: movieHot
     *  start：分页使用，表示第几页
     *  count：分页使用，表示数量
     */
    movieHot: function (params) {
        let url = this.host + 'movie_showing/items';
        return jsonp(url, params)
    },
    /**
     *  接口：免费在线观看的新片
     *  名称: movieFree
     *  start：分页使用，表示第几页
     *  count：分页使用，表示数量
     * */
    movieFree: function (params) {
        let url = this.host + 'movie_free_stream/items';
        return jsonp(url, params)
    },
    /**
     *  接口：近期热门电影
     *  名称: movieFree
     *  start：分页使用，表示第几页
     *  count：分页使用，表示数量
     * */
    movieRecent: function (params) {
        let url = this.host + 'movie_latest/items';
        return jsonp(url, params)
    },
    /**
     *  接口：获取豆瓣电影top250
     *  名称: movieTop250
     *  参数:
     *  start：分页使用，表示第几页
     *  count：分页使用，表示数量
     *  方式：get
     */
    movieTop250: function (paramObj) {
        return get('/movie/top250', paramObj)
    },
    /**
     * 图书接口
     */
    bookFiction: function (params) {
        let url = this.host + 'book_fiction/items';
        return jsonp(url, params)
    },
    bookNoFiction: function (params) {
        let url = this.host + 'book_nonfiction/items';
        return jsonp(url, params)
    },
    bookStore: function (params) {
        let url = this.host + 'market_product_book_mobile_web/items';
        return jsonp(url, params)
    },
    bookStore: function (params) {
        let url = this.host + 'market_product_book_mobile_web/items';
        return jsonp(url, params)
    },
    /**
     * 电视接口
     */
    domestic: function (params) {
        let url = this.host + 'tv_domestic/items';
        return jsonp(url, params)
    },
    varietyShow: function (params) {
        let url = this.host + 'tv_variety_show/items';
        return jsonp(url, params)
    },
    american: function (params) {
        let url = this.host + 'tv_american/items';
        return jsonp(url, params)
    },
    /**
     * 音乐接口
     */
    Chinese: function (params) {
        let url = this.host + 'music_chinese/items';
        return jsonp(url, params)
    },
    occident: function (params) {
        let url = this.host + 'music_occident/items';
        return jsonp(url, params)
    },
    japanKorea: function (params) {
        let url = this.host + 'music_japan_korea/items';
        return jsonp(url, params)
    },



};