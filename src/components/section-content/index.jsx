import React, {memo} from 'react';
import {SectionContentWrapper} from "./style";
import ItemShow from "./c-cpns";
import {calcListNum} from "@/utils";
import {useHomeContext} from "@/hooks";


const SectionContent = memo((props) => {
	const {dataList} = props
	const {itemWidth, rowNum} = useHomeContext()
	return (
		<SectionContentWrapper>
			{
				dataList.slice(0, calcListNum(itemWidth, rowNum)).map((item) => {
					return (
						<ItemShow key={item.id} itemData={item}/>
					)
				})
			}
		</SectionContentWrapper>
	)
});

export default SectionContent;
