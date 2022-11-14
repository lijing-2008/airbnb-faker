import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getEntireRoomList} from "@/services/modules/entire";

const fetchEntireListDataAction = createAsyncThunk("fetchEntireList", (page=0, {dispatch, getState}) => {
	// 修改isLoading
	dispatch(changeIsLoading(true))
	//修改currentPage
	dispatch(changeCurrentPage(page))
	//获取最新数据
	getEntireRoomList(page * 20).then((res) => {
		dispatch(changeRoomList(res.list))
		dispatch(changeTotalCount(res.totalCount))
		dispatch(changeIsLoading(false))
	})
})

const entireReducer = createSlice({
	name: "entire",
	initialState: {
		currentPage: 0, // 当前页码
		roomList: [], // 房间列表
		totalCount: 0, // 数据总数据个数
		isLoading: false
	},
	reducers: {
		changeCurrentPage(state, {payload}) {
			state.currentPage = payload
		},
		changeRoomList(state, {payload}) {
			state.roomList = payload
		},
		changeTotalCount(state, {payload}) {
			state.totalCount = payload
		},
		changeIsLoading(state, {payload}){
			state.isLoading = payload
		}
	}
})
export {
	fetchEntireListDataAction
}
export const {
	changeCurrentPage,
	changeRoomList,
	changeTotalCount,
	changeIsLoading
} = entireReducer.actions
export default entireReducer.reducer
