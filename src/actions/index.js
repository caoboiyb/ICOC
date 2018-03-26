import {
    CHANGE_SEGMENT_COIN_INDEX,
    CHANGE_SEGMENT_ICO_INDEX,
    MARKETCAP_REQUEST_ERROR,
    MARKETCAP_REQUEST_LOADING,
    MARKETCAP_REQUEST_SUCCESS
} from './types'

export const createChangeSegmentCoinAction = newIndex => ({
    type: CHANGE_SEGMENT_COIN_INDEX,
    payload: newIndex
})

export const createChangeSegmentICOAction = newIndex => ({
    type: CHANGE_SEGMENT_ICO_INDEX,
    payload: newIndex
})


//MarketCap API Request
const marketcapLoadingAction = () => ({
    type: MARKETCAP_REQUEST_LOADING
})

const marketcapSuccessAction = (data) => ({
    type: MARKETCAP_REQUEST_SUCCESS,
    payload: data
})

const marketcapErrorAction = (err) => ({
    type: MARKETCAP_REQUEST_ERROR,
    payload: err
})

export const marketcapRequestAction = () => async dispatch => {
    dispatch(marketcapLoadingAction());
    try {
        const response = await fetch('https://api.coinmarketcap.com/v1/global/')
        const data = await response.json()
        const marketcap = await data.total_market_cap_usd
        dispatch(marketcapSuccessAction(marketcap))
    }
    catch (err) {
        console.log(err);
        dispatch(marketcapErrorAction(err));
    }
}