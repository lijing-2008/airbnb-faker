import React, {memo, useEffect} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import EntireRooms from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";
import {fetchEntireListDataAction} from "@/store/features/entire";
import {useDispatch} from "react-redux";

const Entire = memo((props) => {

	// 发送网络请求
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchEntireListDataAction())
	}, [dispatch])

	return (
		<EntireWrapper>
			<EntireFilter/>
			<EntireRooms/>
			<EntirePagination/>
		</EntireWrapper>
	)
});

export default Entire;
