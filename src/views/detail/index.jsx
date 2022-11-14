import React, {memo} from 'react';
import {useSelector} from "react-redux";

const Detail = memo((props) => {
	const {detailInfo} = useSelector(( state ) => {
	  return{
			detailInfo: state.detail.detailInfo
		}
	})
	console.log(detailInfo)
	return (
		<div>
			{
				detailInfo?.picture_urls?.map(( item ) => {
					return(
						<div key={item}>{item}</div>
					)
				})
			}
		</div>
	)
});

export default Detail;
