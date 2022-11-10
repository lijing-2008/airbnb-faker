import React, {memo} from 'react';
import {HeaderLeftWrapper} from "./style";
import IconLogo from "../../../../assets/svg/icon_logo";

const HeaderLeft = memo((props) => {
	return (
		<HeaderLeftWrapper>
			<div className="logo">
				<IconLogo/>
			</div>
		</HeaderLeftWrapper>
	)
});

export default HeaderLeft;
