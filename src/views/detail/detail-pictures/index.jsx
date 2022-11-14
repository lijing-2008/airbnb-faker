import React, {memo, useState} from 'react';
import PropTypes from 'prop-types'
import {DetailPictureWrapper} from "@/views/detail/detail-pictures/style";
import PictureBrowser from "@/base-ui/picture-browser";
import {shallowEqual, useSelector} from "react-redux";

const DetailPicture = memo((props) => {
	const [showBrowser, setShowBrowser] = useState(false)
	const {detailInfo} = useSelector((state) => ({
		detailInfo: state.detail.detailInfo
	}), shallowEqual)

	return (
		<DetailPictureWrapper>
			<div className="picture-container">
				<div className="left">
					<img src={detailInfo?.picture_urls[0]} alt="pic1"/>
				</div>
				<div className="right">
					{
						detailInfo.picture_urls.slice(1, 5).map(item => {
							return (
								<div className="item" key={item}>
									<img src={item} alt="img"/>
								</div>
							)
						})
					}
					<div className="show-btn" onClick={(e) => setShowBrowser(true)}>显示全部</div>
				</div>
			</div>
			{showBrowser && <PictureBrowser pictureUrls={detailInfo?.picture_urls} closeClick={e => setShowBrowser(false)}/>}
		</DetailPictureWrapper>
	)
});
DetailPicture.propTypes = {
	pictureUrls: PropTypes.array
}
export default DetailPicture;
