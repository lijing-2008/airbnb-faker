import React, {memo} from 'react';
import {HomeSectionV4Wrapper} from "@/views/home/home-section-v4/style";
import SectionHeader from "@/components/section-header";
import ItemShow from "@/components/section-content/c-cpns";
import ScrollView from "@/base-ui/scroll-view";
import SectionFooter from "@/components/section-footer";

const HomeSectionV4 = memo((props) => {
	const {infoData} = props
	return (
		<HomeSectionV4Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
			<div className="plus-list">
				<ScrollView>
					{
						infoData.list.map(( item ) => {
							return(
								<ItemShow key={item.id} itemData={item}/>
							)
						})
					}
				</ScrollView>
			</div>
			<SectionFooter info="查看更多"/>
		</HomeSectionV4Wrapper>
	)
});

export default HomeSectionV4;
