import React, {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import {IndicatorWrapper} from "@/base-ui/indicator/style";

const Indicator = memo((props) => {
	const {selectIndex} = props
	const indicatorRef = useRef()
	useEffect(() => {
		//前两个和后两个不用移动
		//获取选中item的offsetLeft
		const selectItemEl = indicatorRef.current.children[selectIndex]
		const selectOffSet = selectItemEl.offsetLeft
		const selectWidth = selectItemEl.clientWidth
		//获取content的宽度
		const contentWidth = indicatorRef.current.clientWidth
		const contentScroll = indicatorRef.current.scrollWidth
		//计算距离
		let distance = selectOffSet + selectWidth * 0.5 - contentWidth * 0.5
		if (distance < 0) distance = 0
		const totalDistance = contentScroll - contentWidth
		if (distance > totalDistance) distance = totalDistance

		indicatorRef.current.style.transform = `translateX(${-distance}px)`
	}, [selectIndex])
	return (
		<IndicatorWrapper>
			<div className="i-content" ref={indicatorRef}>
				{
					props.children
				}
			</div>
		</IndicatorWrapper>
	)
});
Indicator.propTypes = {
	selectIndex: PropTypes.number
}
export default Indicator;
