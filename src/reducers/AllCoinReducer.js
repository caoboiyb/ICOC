import { ALL_COIN_REQUEST_SUCCESS } from '../actions/types'

export default allCoinReducer = (state = [], action) =>
    action.type === ALL_COIN_REQUEST_SUCCESS
        ? action.payload
        : state