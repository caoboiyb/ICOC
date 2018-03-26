import { CHANGE_SEGMENT_ICO_INDEX } from '../actions/types'

export default segmentICOReducer = (state = 0, action) => 
    action.type === CHANGE_SEGMENT_ICO_INDEX
        ? action.payload
        : state