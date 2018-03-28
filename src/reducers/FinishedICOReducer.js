import { FINISHED_ICO_REQUEST_SUCCESS } from '../actions/types'

export default finishedICOReducer = (state = [], action) =>
    action.type === FINISHED_ICO_REQUEST_SUCCESS
        ? action.payload
        : state