import React, {memo} from 'react';
import {FooterSectionWrapper} from "./style";
import PropTypes from "prop-types";

const FooterSection = memo((props) => {
	const {name, list} = props
	return (
		<FooterSectionWrapper>
			<div className="name">{name}</div>
			<ul className="list">
				{
					list.map((item) => {
						return (
							<li className="item" key={item}>{item}</li>
						)
					})
				}
			</ul>
		</FooterSectionWrapper>
	)
});
FooterSection.propTypes = {
	name: PropTypes.string,
	list: PropTypes.array
}


export default FooterSection;
