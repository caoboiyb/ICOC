import { CHANGE_SEGMENT_COIN_INDEX } from '../actions/types'

export default segmentCoinReducer = (state = 0, action) => 
    action.type === CHANGE_SEGMENT_COIN_INDEX
        ? action.payload
        : state