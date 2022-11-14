import React, {memo, useRef, useState} from 'react';
import {ItemShowWrapper} from "./style";
import {Rating} from "@mui/material";
import {useHomeContext} from "@/hooks";
import {Carousel} from "antd";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const ItemShow = memo((props) => {
	const {itemData, itemClick} = props
	const {isPlus, itemWidth} = useHomeContext()
	const [selectIndex, setSelectIndex] = useState(0);
	const slickRef = useRef()
	const controlClickHandle = (e, isRight = true) => {
		//阻止冒泡事件
		e.stopPropagation()
		isRight ? slickRef.current.next() : slickRef.current.prev()
		let newIndex = selectIndex
		if (isRight) {
			newIndex = selectIndex + 1
		} else {
			newIndex = selectIndex - 1
		}
		const len = itemData.picture_urls.length
		if (newIndex < 0) newIndex = len - 1
		if (newIndex > len - 1) newIndex = 0
		setSelectIndex(newIndex)
	}

	//子元素的赋值
	const sliderElement = (
		<div className="slider">
			<div className="control">
				<div className="btn left" onClick={(e) => controlClickHandle(e, false)}>
					<IconArrowLeft width={20} height={20}/>
				</div>
				<div className="btn right" onClick={e => controlClickHandle(e)}>
					<IconArrowRight width={20} height={20}/>
				</div>
			</div>
			<div className="indicator">
				<Indicator selectIndex={selectIndex}>
					{
						itemData?.picture_urls?.map((item, index) => {
							return (
								<div className="item" key={item}>
													<span className={classNames("dot", {
														active: index === selectIndex,
														secondary: index === selectIndex - 1 || index === selectIndex + 1,
														third: index === selectIndex - 2 || index === selectIndex + 2,
														fourth: index === selectIndex - 3 || index === selectIndex + 3,
														fifth: index === selectIndex - 4 || index === selectIndex + 4,
													})}/>
								</div>
							)
						})
					}
				</Indicator>
			</div>
			<Carousel dots={false} ref={slickRef}>
				{
					itemData?.picture_urls?.map((item) => {
						return (
							<div className="cover" key={item}>
								<img src={item} alt="img"/>
							</div>
						)
					})
				}
			</Carousel>
		</div>
	)
	const pictureElement = (
		<div className="cover">
			<img src={itemData?.picture_url} alt="img"/>
		</div>
	)
	//事件处理
	const handleItemClick = (itemData) => {
		if (itemClick) itemClick(itemData)
	}
	return (
		<ItemShowWrapper
			verifyColor={itemData?.verify_info?.text_color || "#39576a"}
			itemWidth={itemWidth}
			onClick={() => handleItemClick(itemData)}
		>
			<div className="container">
				{
					"picture_urls" in itemData ? sliderElement : pictureElement
					// itemData?.picture_urls ? sliderElement : pictureElement
				}
				<div className="text">
					<div>
						{isPlus && <span className="plus">plus</span>}
						<span className="message">{itemData.verify_info.messages.join("·")}</span>
					</div>
					<div className="name multi">{itemData.name}</div>
					<div className="price">{itemData.price_format}/晚</div>
					<div className="star">
						<Rating name="read-only" value={itemData.star_rating ?? 5} readOnly precision={0.5}
										sx={{fontSize: "12px", color: itemData.star_rating_color}}/>
						<span className="count">{itemData.reviews_count}</span>
						<span className="extra">{itemData.bottom_info?.content}</span>
					</div>
				</div>
			</div>
		</ItemShowWrapper>
	)
});

export default ItemShow;
