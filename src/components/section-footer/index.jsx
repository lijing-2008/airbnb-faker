import React, {memo} from 'react';
import {SectionFooterWrapper} from "@/components/section-footer/style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const SectionFooter = memo((props) => {
	const {info, arrow=true, color="#222"} = props
	return (
		<SectionFooterWrapper color={color}>
			<span className="info">{info}</span>
			{
				arrow && <IconArrowRight/>
			}
		</SectionFooterWrapper>
	)
});

export default SectionFooter;
