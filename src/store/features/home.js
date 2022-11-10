import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getHomeDiscountInfo, getHomeGoodPriceInfo, getHomeHighScoreInfo, getHomeRecommendInfo} from "@/services";

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
})
const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo:{},
		recommendInfo:{}
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
		}

	},
})
export const {changeGoodPriceAction, changeHighScoreAction, changeDiscountAction,changeRecommendAction} = homeSlice.actions
export {
	fetchHomeInfoAction
}
export default homeSlice.reducer
