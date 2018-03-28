import { LIVE_ICO_REQUEST_SUCCESS } from '../actions/types'

export default liveICOReducer = (state = [], action) =>
    action.type === LIVE_ICO_REQUEST_SUCCESS
        ? action.payload
        : state