import React, {memo} from 'react';
import {useNavigate} from "react-router-dom"
import {SectionFooterWrapper} from "@/components/section-footer/style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const SectionFooter = memo((props) => {
	const {info, arrow=true, color="#222"} = props
	//事件处理
	const navigate = useNavigate()
	const handleMoreClick = () => {
	  navigate("/entire")
	}
	return (
		<SectionFooterWrapper color={color}>
			<span className="info" onClick={handleMoreClick}>{info}</span>
			{
				arrow && <IconArrowRight/>
			}
		</SectionFooterWrapper>
	)
});

export default SectionFooter;
