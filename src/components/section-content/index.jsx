import React, {memo} from 'react';
import {SectionContentWrapper} from "./style";
import ItemShow from "./c-cpns";

const SectionContent = memo((props) => {
	const {dataList, itemWidth} = props
	return (
		<SectionContentWrapper>
			{
				dataList.slice(0,8).map((item) => {
					return (
						<ItemShow key={item.id} itemData={item} itemWidth={itemWidth}/>
					)
				})
			}
		</SectionContentWrapper>
	)
});

export default SectionContent;
