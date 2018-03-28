import {
    CHANGE_SEGMENT_COIN_INDEX,
    CHANGE_SEGMENT_ICO_INDEX,
    MARKETCAP_REQUEST_ERROR,
    MARKETCAP_REQUEST_LOADING,
    MARKETCAP_REQUEST_SUCCESS,
    COIN_REQUEST_ERROR,
    COIN_REQUEST_LOADING,
    COIN_REQUEST_SUCCESS,
    ALL_COIN_REQUEST_ERROR,
    ALL_COIN_REQUEST_LOADING,
    ALL_COIN_REQUEST_SUCCESS,
    FINISHED_ICO_REQUEST_ERROR,
    FINISHED_ICO_REQUEST_LOADING,
    FINISHED_ICO_REQUEST_SUCCESS,
    LIVE_ICO_REQUEST_ERROR,
    LIVE_ICO_REQUEST_LOADING,
    LIVE_ICO_REQUEST_SUCCESS,
    UP_ICO_REQUEST_ERROR,
    UP_ICO_REQUEST_LOADING,
    UP_ICO_REQUEST_SUCCESS
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

//Top100Coin API Request
const coinLoadingAction = () => ({
    type: COIN_REQUEST_LOADING
})

const coinSuccessAction = (data) => ({
    type: COIN_REQUEST_SUCCESS,
    payload: data
})

const coinErrorAction = (err) => ({
    type: COIN_REQUEST_ERROR,
    payload: err
})

export const coinRequestAction = () => async dispatch => {
    dispatch(coinLoadingAction());
    try {
        const response = await fetch('https://api.coinmarketcap.com/v1/ticker/')
        const data = await response.json()
        dispatch(coinSuccessAction(data))
    }
    catch (err) {
        console.log(err)
        dispatch(coinErrorAction(err))
    }
}

//AllCoin API Request
const allLoadingAction = () => ({
    type: ALL_COIN_REQUEST_LOADING
})

const allSuccessAction = (data) => ({
    type: ALL_COIN_REQUEST_SUCCESS,
    payload: data
})

const allErrorAction = (err) => ({
    type: ALL_COIN_REQUEST_ERROR,
    payload: err
})

export const allRequestAction = () => async dispatch => {
    dispatch(allLoadingAction());
    try {
        const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10000')
        const data = await response.json()
        dispatch(allSuccessAction(data))
    }
    catch (err) {
        console.log(err)
        dispatch(allErrorAction(err))
    }
}

//Live ICO
const liveICOLoadingAction = () => ({
    type: LIVE_ICO_REQUEST_LOADING
})

const liveICOSuccessAction = (data) => ({
    type: LIVE_ICO_REQUEST_SUCCESS,
    payload: data
})

const liveICOErrorAction = (err) => ({
    type: LIVE_ICO_REQUEST_ERROR,
    payload: err
})

export const liveRequestAction = () => async dispatch => {
    dispatch(liveICOLoadingAction())
    try {
        const response = await fetch('https://api.icowatchlist.com/public/v1/live')
        const data = await response.json()
        const payload = await data.ico.live
        dispatch(liveICOSuccessAction(payload))
    }
    catch (err) {
        console.log(err)
        dispatch(liveICOErrorAction(err))
    }
}

//Upcoming ICO
const upcomingICOLoadingAction = () => ({
    type: UP_ICO_REQUEST_LOADING
})

const upcomingICOSuccessAction = data => ({
    type: UP_ICO_REQUEST_SUCCESS,
    payload: data
})

const upcomingICOErrorAction = err => ({
    type: UP_ICO_REQUEST_ERROR,
    payload: err
})

export const upcomingRequestAction = () => async dispatch => {
    dispatch(upcomingICOLoadingAction())
    try {
        const response = await fetch('https://api.icowatchlist.com/public/v1/upcoming')
        const data = await response.json()
        const payload = await data.ico.upcoming
        dispatch(upcomingICOSuccessAction(payload))
    }
    catch (err) {
        console.log(err)
        dispatch(upcomingICOErrorAction(err))
    }
}

//Past ICO
const finishedICOLoadingAction = () => ({
    type: FINISHED_ICO_REQUEST_LOADING
})

const finishedICOSuccessAction = (data) => ({
    type: FINISHED_ICO_REQUEST_SUCCESS,
    payload: data
})

const finishedICOErrorAction = err => ({
    type: FINISHED_ICO_REQUEST_ERROR,
    payload: err
})

export const finishedRequestAction = () => async dispatch => {
    dispatch(finishedICOLoadingAction())
    try {
        const response = await fetch('https://api.icowatchlist.com/public/v1/finished')
        const data = await response.json()
        const payload = await data.ico.finished
        dispatch(finishedICOSuccessAction(payload))
    } catch (err) {
        console.log(err)
        dispatch(finishedICOErrorAction(err))
    }
}