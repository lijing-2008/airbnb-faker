import React, {memo} from 'react';
import PropTypes from "prop-types"
import {SectionHeaderWrapper} from "./style";

const SectionHeader = memo((props) => {
	return (
		<SectionHeaderWrapper>
			<div className="title">{props.title}</div>
			<div className="sub-title">{props.subtitle || "默认的子标题"}</div>
		</SectionHeaderWrapper>
	)
});

SectionHeader.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
}

export default SectionHeader;
