import React, {memo, useState} from 'react';
import {SectionTabsWrapper} from "@/components/section-tabs/style";
import PropTypes from "prop-types";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
	const {tabNames, tabClick} = props
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemHandleClick = (index, name) => {
		setCurrentIndex(index)
		tabClick(index, name)
	}
	return (
		<SectionTabsWrapper>
			<ScrollView isBlur={true}>
					{
						tabNames.map((item, index) => {
							return (
								<div
									className={classNames("item", {active: index === currentIndex})}
									key={item}
									onClick={e => itemHandleClick(index, item)}
								>{item}</div>
							)
						})
					}
			</ScrollView>
		</SectionTabsWrapper>
	)
});
SectionTabs.propTypes = {
	tabNames: PropTypes.array
}

export default SectionTabs;
