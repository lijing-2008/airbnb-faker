import React, {memo, useEffect, useRef, useState} from 'react';
import {ScrollViewWrapper} from "@/base-ui/scroll-view/style";
import IconArrowRightCircle from "@/assets/svg/icon-arrow-right-circle";
import IconArrowLeftCircle from "@/assets/svg/icon_arrow-left-circle";

const ScrollView = memo((props) => {
	//定义内部状态
	const [showRightBtn, setShowRightBtn] = useState(false)
	const [showLeftBtn, setShowLeftBtn] = useState(false);
	const totalDistanceRef = useRef()
	const posIndexRef = useRef(0)
	//组件渲染完毕，判断是否显示右侧的按钮
	const scrollContentRef = useRef()
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth
		const clientWidth = scrollContentRef.current.clientWidth
		const totalDistance = scrollWidth - clientWidth
		totalDistanceRef.current = totalDistance
		setShowRightBtn(totalDistance > 0)
	}, [props.children])
	//事件处理
	const controlHandleClick = (isRight) => {
		//计算下一个排头元素索引
		const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
		const newE1 = scrollContentRef.current.children[newIndex]
		const newOffSet = newE1.offsetLeft
		scrollContentRef.current.style.transform = `translateX(-${newOffSet}px)`
		// 更新当前的排头元素索引
		posIndexRef.current = newIndex
		//	是否继续显示按钮
		setShowRightBtn(totalDistanceRef.current > newOffSet)
		setShowLeftBtn(newOffSet > 0)
	}
	return (
		<ScrollViewWrapper>
				{showLeftBtn &&
					<>
						<div className="control left" onClick={() => controlHandleClick(false)}>
							<IconArrowLeftCircle/>
						</div>
						<div className="blur left"/>
					</>
				}
				{showRightBtn &&
					<>
						<div className="control right" onClick={() => controlHandleClick(true)}>
							<IconArrowRightCircle/>
						</div>
						<div className="blur right"/>
					</>
				}
				<div className="content">
					<div className="scroll-content" ref={scrollContentRef}>{props.children}</div>
				</div>
		</ScrollViewWrapper>
	)
});
ScrollView.protoTypes = {}

export default ScrollView;
