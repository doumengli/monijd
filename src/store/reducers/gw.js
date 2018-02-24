import {ADD, JIAN, ADDPRICE} from '../constants/GwCl'
const initalState = {
    total:0,
    price:0,
    sum:0
}
const gw = (state=initalState, action) => {
    switch (action.type){
        case ADD:
          return Object.assign({}, state, {total:state.total-action.price, sum:state.sum + 1})
        case JIAN:
          state.total=state.sum>0?state.total-action.price:state.total
          state.sum=state.sum>0?state.sum -1:0
          return Object.assign({}, state)
        case 'ADDPRICE':
          return Object.assign({}, state, {total:state.total + action.price, sum:state.sum + 1})
        default: 
            return state
    }
}
export default gw;