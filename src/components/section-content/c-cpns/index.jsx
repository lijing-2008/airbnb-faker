import React, {memo, useContext} from 'react';
import {ItemShowWrapper} from "./style";
import {Rating} from "@mui/material";
import {useHomeContext} from "@/hooks";

const ItemShow = memo((props) => {
	const {itemData } = props
	const {isPlus, itemWidth}=useHomeContext()
	return (
		<ItemShowWrapper
			verifyColor={itemData?.verify_info?.text_color || "#39576a"}
			itemWidth={itemWidth}
		>
			<div className="container">
				<div className="cover">
					<img src={itemData.picture_url} alt="img"/>
				</div>
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
