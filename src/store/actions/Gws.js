import {ADD,JIAN,ADDPRICE} from '../constants/GwCl'
export const add = (price) => {
    return {
        type:ADD,
        price
    }
}
export const jian = (price) => {
    return {
        type:JIAN,
        price
    }
}
export const getPrice = (price) => {
    return {
        type:ADDPRICE,
        price
    }
}