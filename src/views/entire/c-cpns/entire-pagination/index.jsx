import React, {memo} from 'react';
import {PaginationWrapper} from "@/views/entire/c-cpns/entire-pagination/style";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@mui/material";
import { fetchEntireListDataAction} from "@/store/features/entire";

const EntirePagination = memo((props) => {
	const {currentPage, roomList, totalCount} = useSelector((state) => ({
		currentPage: state.entire.currentPage,
		roomList: state.entire.roomList,
		totalCount: state.entire.totalCount
	}))
	const dispatch = useDispatch()
	//分页相关算法
	const totalPage = Math.ceil(totalCount / 20)
	const startCount = currentPage * 20 + 1
	const endCount = (currentPage + 1) * 20

	const handleChangePage = (event, value) => {
		window.scrollTo(0,0)
		dispatch(fetchEntireListDataAction(value))
		console.log(value)
	}
	return (
		<PaginationWrapper>
			<Pagination count={totalPage} color="primary" onChange={handleChangePage}/>
		</PaginationWrapper>
	)
});

export default EntirePagination;
