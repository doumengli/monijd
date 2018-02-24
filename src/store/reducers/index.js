import {combineReducers} from 'redux';//返回的为函数
import classify from './classify'; 
import home from './home';
import mine from './mine';
import find from './find';
import gw from './gw';
const rootReducers = combineReducers({ // 合并函数
    classify,
    find,
    mine,
    gw,
    home
})
export default rootReducers