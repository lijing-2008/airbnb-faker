import React, {memo, useCallback, useState} from 'react';
import {HomeSectionWrapper} from "@/views/home/home-section-v2/style";
import SectionHeader from "@/components/section-header";
import SectionContent from "@/components/section-content";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
	//props数据
	const {infoData} = props

	// 定义内部的state
	const initialName = infoData.dest_address[0].name
	const [currentAddress, setCurrentAddress] = useState(initialName);

	const tabClickHandle = useCallback(function (index, name) {
		setCurrentAddress(name)
	}, [])
	return (
		<HomeSectionWrapper>
			<SectionHeader title={infoData?.title} subtitle={infoData.subtitle}/>

			<SectionTabs
				tabNames={infoData.dest_address.map((item) => item.name)}
				tabClick={tabClickHandle}
			/>

			<SectionContent
				dataList={infoData.dest_list[currentAddress]}
				itemWidth="33.33%"
			/>

			<SectionFooter info={`查看更多${currentAddress}房源`} color="#00848a"/>

		</HomeSectionWrapper>
	)
});

export default HomeSectionV2;
