import * as types from '../constants/homeTypes'
const initalState = {
    jdList:null
}
const home = (state=initalState, action) => {
    switch (action.type) {
        case types.GET_JD_LIST:
          return  Object.assign({}, state, {jdList:action.jdList})
        default: return state
    }

}
export default home;