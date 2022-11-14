import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {DetailWrapper} from "@/views/detail/style";
import DetailPicture from "@/views/detail/detail-pictures";

const Detail = memo((props) => {
	const {detailInfo} = useSelector(( state ) => {
	  return{
			detailInfo: state.detail.detailInfo
		}
	})
	return (
		<DetailWrapper>
			<DetailPicture pictureUrls={detailInfo?.picture_urls}/>
		</DetailWrapper>
	)
});

export default Detail;
