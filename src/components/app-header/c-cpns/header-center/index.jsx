import React, {memo} from 'react';
import {HeaderCenterWrapper} from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo((props) => {
	return (
		<HeaderCenterWrapper>
			<div className="search-bar">
				<div className="text">
					搜索房源和体验
				</div>
				<div className="search">
					<IconSearch/>
				</div>
			</div>
		</HeaderCenterWrapper>
	)
});

export default HeaderCenter;
