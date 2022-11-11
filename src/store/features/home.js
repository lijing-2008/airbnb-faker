import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
	getHomeDiscountInfo,
	getHomeForwardInfo,
	getHomeGoodPriceInfo,
	getHomeHighScoreInfo, getHomePlusInfo,
	getHomeRecommendInfo
} from "@/services";

const fetchHomeInfoAction = createAsyncThunk("fetchdata", async (args, {dispatch}) => {
	getHomeGoodPriceInfo().then((res) => {
		dispatch(changeGoodPriceAction(res))
	})
	getHomeHighScoreInfo().then((res) => {
		dispatch(changeHighScoreAction(res))
	})
	getHomeDiscountInfo().then(( res ) => {
	  dispatch(changeDiscountAction(res))
	})
	getHomeRecommendInfo().then(( res ) => {
		dispatch(changeRecommendAction(res))
	})
	getHomeForwardInfo().then(( res ) => {
		dispatch(changeForwardAction(res))
	})
	getHomePlusInfo().then(( res ) => {
		dispatch(changePlusAction(res))
	})
})
const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo:{},
		recommendInfo:{},
		forwardInfo:{},
		plusInfo:{}
	},
	reducers: {
		changeGoodPriceAction(state, {payload}) {
			state.goodPriceInfo = payload
		},
		changeHighScoreAction(state, {payload}) {
			state.highScoreInfo = payload
		},
		changeDiscountAction(state, {payload}){
			state.discountInfo = payload
		},
		changeRecommendAction(state, {payload}){
			state.recommendInfo = payload
		},
		changeForwardAction(state, {payload}){
			state.forwardInfo = payload
		},
		changePlusAction(state, {payload}){
			state.plusInfo = payload
		}


	},
})
export const {
	changeGoodPriceAction,
	changeHighScoreAction,
	changeDiscountAction,
	changeRecommendAction,
	changeForwardAction,
	changePlusAction
} = homeSlice.actions
export {
	fetchHomeInfoAction
}
export default homeSlice.reducer
