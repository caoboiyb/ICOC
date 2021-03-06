import { combineReducers } from 'redux';

import { navigationReducer } from '../AppNavigation'

import segmentCoinReducer from './SegmentCoinReducer'
import segmentICOReducer from './SegmentICOReducer'
import marketcapReducer from './MarketCapReducer'
import listCoinReducer from './ListCoinReducer'
import allCoinReducer from './AllCoinReducer'
import liveICOReducer from './LiveICOReducer'
import upcomingICOReducer from './UpcomingICOReducer'
import finishedICOReducer from './FinishedICOReducer'

export default combineReducers({
    nav: navigationReducer,
    coinIndex: segmentCoinReducer,
    icoIndex: segmentICOReducer,
    marketCap: marketcapReducer,
    listCoin: listCoinReducer,
    allCoin: allCoinReducer,
    liveICO: liveICOReducer,
    upcomingICO: upcomingICOReducer,
    finishICO: finishedICOReducer
})