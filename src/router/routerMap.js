import Home from '../containers/Home'
import Find from '../containers/Find'
import Gw from '../containers/Gw'
import Classify from '../containers/Classify'
import Mine from '../containers/Mine'
import xq from '../containers/Detail'
const Router_MAP={
    NAV:[
        {
            icon:"icon iconfont icon-shouye",
            text:"首页",
            to:'/'
        },
        {
            icon:"icon iconfont icon-fenlei-xuanzhong",
            text:"分类",
            to:'/classify'
        },
        {
            icon:"icon iconfont icon-tongjitu111",
            text:"发现",
            to:'/find'
        },
        {
            icon:"icon iconfont icon-gouwuche",
            text:"购物车",
            to:'/gw'
        },
        {
            icon:"icon iconfont icon-wode",
            text:"我的",
            to:'/mine'
        }
    ],
    ROUTER:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/classify',
            component:Classify
        },
        {
            path:'/find',
            component:Find
        },
        {
            path:'/gw',
            component:Gw
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/xq',
            component:xq
        }
    ]
}
export default Router_MAP