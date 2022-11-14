import React, {memo, useState} from 'react';
import {FilterWrapper} from "@/views/entire/c-cpns/entire-filter/style";
import filterData from "@/assets/data/filter.json"
import classNames from "classnames";

const EntireFilter = memo((props) => {
	const [selectItems, setSelectItems] = useState([]);
	const handleClickFilter = (index, item) => {
		const newItems = [...selectItems]
		if (newItems.includes(item)){
			setSelectItems(newItems.filter(it => it !== item))
		}else {
			newItems.push(item)
			setSelectItems(newItems)
		}
		// setSelectItems(newItems
	}
	return (
		<FilterWrapper>
			<div className="filter">
				<div className="items">
					{
						filterData.map((item, index) => {
							return (
								<div
									className={classNames("item", {active:selectItems.includes(item)})}
									key={item}
									onClick={() => handleClickFilter(index, item)}
								>
									{item}
								</div>
							)
						})
					}
				</div>
				<div className="map">显示地图</div>
			</div>
		</FilterWrapper>
	)
});

export default EntireFilter;
