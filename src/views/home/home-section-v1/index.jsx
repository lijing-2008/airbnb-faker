import React, {memo, useContext} from 'react';
import {HomeSectionWrapper} from "@/views/home/home-section-v1/style";
import SectionHeader from "@/components/section-header";
import SectionContent from "@/components/section-content";
import SectionFooter from "@/components/section-footer";
import {HomeContext} from "@/context";
import {useHomeContext} from "@/hooks";

const HomeSectionV1 = memo((props) => {
	const {infoData} = props
	return (
		<HomeSectionWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
			<SectionContent dataList={infoData.list}/>
			<SectionFooter info="显示全部" />
		</HomeSectionWrapper>
	)
});

export default HomeSectionV1;
