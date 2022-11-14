import React, {memo, useCallback} from 'react';
import {RoomsWrapper} from "@/views/entire/c-cpns/entire-rooms/style";
import {useDispatch, useSelector} from "react-redux";
import ItemShow from "@/components/section-content/c-cpns";
import cupImage from "@/assets/img/cup.gif"
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import {changeDetailInfoAction} from "@/store/features/detail";

const EntireRooms = memo((props) => {
	const {roomList, totalCount, isLoading} = useSelector((state) => ({
		roomList: state.entire.roomList,
		totalCount: state.entire.totalCount,
		isLoading: state.entire.isLoading
	}))

	//事件处理
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const itemClickHandle = useCallback((itemData) => {
		dispatch(changeDetailInfoAction(itemData))
		navigate("/detail")
	},[navigate,dispatch])
	return (
		<RoomsWrapper>
			<div className="desc">
				<img src={cupImage} alt="cup"/>
				<div className="text">周租月租，高品质房源优惠住 设施齐全、性价比高，还可筛选「周租月租优惠」享受好价，现在就抢订适合长住的好房</div>
			</div>
			<div className="content">
				<div className="title">{totalCount}多处住宿</div>
				<div className="list">
					{
						roomList.map((item) => {
							return (
								<ItemShow
									itemData={item}
									itemWidth="20%"
									key={item.id}
									itemClick={itemClickHandle}
								/>
							)
						})
					}
				</div>
				<div className={classNames({"loading-cover": isLoading})}/>
			</div>
		</RoomsWrapper>
	)
});

export default EntireRooms;
