import React, {memo} from 'react';
import {HomeSectionWrapper} from "@/views/home/home-section-v3/style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import ForwardItem from "@/components/forward-item";

const HomeSectionV3 = memo((props) => {
	const {infoData} = props
	return (
		<HomeSectionWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
			<div className="forward-list">
				<ScrollView isBlur={false}>
					{
						infoData.list.map(( item ) => {
							return(
								<ForwardItem key={item.city} itemData={item}/>
							)
						})
					}
				</ScrollView>
			</div>
		</HomeSectionWrapper>
	)
});

export default HomeSectionV3;
