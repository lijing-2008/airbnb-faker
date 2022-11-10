import React, {memo, useEffect} from 'react';
import TopBanner from "./banner";
import {HomeWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeInfoAction} from "@/store/features/home";
import HomeSectionV1 from "@/views/home/home-section-v1";
import HomeSectionV2 from "@/views/home/home-section-v2";
import {isEmptyObject} from "@/utils";

const Home = memo((props) => {
	// 发起进行的网络请求
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeInfoAction())
	}, [dispatch]);

	const {goodPriceInfo,highScoreInfo, discountInfo,recommendInfo} = useSelector((state) => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			discountInfo: state.home.discountInfo,
			recommendInfo: state.home.recommendInfo

		}
	}, shallowEqual)

	return (
		<HomeWrapper>
			<TopBanner/>
			<div className="content">
				{isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
				{isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
				{isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
				{isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
			</div>
		</HomeWrapper>
	)
});

export default Home;
