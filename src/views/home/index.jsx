import React, {memo,  useEffect} from 'react';
import TopBanner from "./banner";
import {HomeWrapper} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeInfoAction} from "@/store/features/home";
import HomeSectionV1 from "@/views/home/home-section-v1";
import HomeSectionV2 from "@/views/home/home-section-v2";
import {isEmptyObject} from "@/utils";
import HomeSectionV3 from "@/views/home/home-section-v3";
import {HomeContext} from "@/context";
import HomeSectionV4 from "@/views/home/home-section-v4";

const Home = memo((props) => {
	// 发起进行的网络请求
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeInfoAction())
	}, [dispatch]);

	const {goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, forwardInfo, plusInfo} = useSelector((state) => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			discountInfo: state.home.discountInfo,
			recommendInfo: state.home.recommendInfo,
			forwardInfo: state.home.forwardInfo,
			plusInfo: state.home.plusInfo


		}
	}, shallowEqual)

	return (
		<HomeWrapper>
			<TopBanner/>
			<div className="content">
				{isEmptyObject(recommendInfo) &&
					<HomeContext.Provider value={{rowNum: 1, isPlus: false, itemWidth: "25%"}}>
						<HomeSectionV2 infoData={recommendInfo}/>
					</HomeContext.Provider>
				}
				{isEmptyObject(discountInfo) &&
					<HomeContext.Provider value={{rowNum: 1, isPlus: false, itemWidth: "25%"}}>
						<HomeSectionV2 infoData={discountInfo}/>
					</HomeContext.Provider>
				}
				{isEmptyObject(forwardInfo) && <HomeSectionV3 infoData={forwardInfo}/>}
				{isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
				{isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
				{isEmptyObject(plusInfo) &&
					<HomeContext.Provider value={{rowNum: 1, isPlus: true, itemWidth: "33.33%"}}>
						<HomeSectionV4 infoData={plusInfo} />
					</HomeContext.Provider>
				}
			</div>
		</HomeWrapper>
	)
});

export default Home;
