import React, {memo} from 'react';
import {ForwardItemWrapper} from "@/components/forward-item/style";

const ForwardItem = memo((props) => {
	const {itemData} = props
	return (
		<ForwardItemWrapper>
			<div className="inner">
				<div className="info">
					<div className="bg-cover"/>
					<img className="cover" src={itemData.picture_url} alt="img"/>
					<div className="content">
						<div className="address">{itemData.city}</div>
						<div className="price">{itemData.price}</div>
					</div>
				</div>
			</div>
		</ForwardItemWrapper>
	)
});

export default ForwardItem;
