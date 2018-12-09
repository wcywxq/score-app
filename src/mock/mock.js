/** 随机数据 */
import Mock from 'mockjs'
import application from '../static/json/application.json'
import cata from '../static/json/cata.json'
import type from '../static/json/type.json'

Mock.mock("http://www.tstdwxq.cn/application", {
    application: application
})
Mock.mock("http://www.tstdwxq.cn/cata", {
    cata: cata.data
})
Mock.mock("http://www.tstdwxq.cn/type", {
    type: type.data
})