import { COIN_REQUEST_SUCCESS } from '../actions/types'

export default listCoinReducer = (state = [], action) =>
    action.type === COIN_REQUEST_SUCCESS
        ? action.payload
        : state