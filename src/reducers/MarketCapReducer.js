import { MARKETCAP_REQUEST_SUCCESS } from '../actions/types'

export default marketcapReducer = (state = 0, action) =>
    action.type === MARKETCAP_REQUEST_SUCCESS
        ? action.payload
        : state