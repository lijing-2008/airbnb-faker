import {createSlice} from "@reduxjs/toolkit";

const detailReducer = createSlice({
	name: "detail",
	initialState:{
		detailInfo:{}
	},
	reducers:{
		changeDetailInfoAction(state, {payload}){
			state.detailInfo = payload
		}
	}
})
export const {changeDetailInfoAction} = detailReducer.actions
export default detailReducer.reducer
