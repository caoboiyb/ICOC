import { UP_ICO_REQUEST_SUCCESS } from '../actions/types'

export default upcomingICOReducer = (state = [], action) =>
    action.type === UP_ICO_REQUEST_SUCCESS
        ? action.payload
        : state