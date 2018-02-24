import * as types from '../constants/homeTypes';
export const getJdList = (jdList) => {
    return {
        type:types.GET_JD_LIST,
        jdList
    }
}