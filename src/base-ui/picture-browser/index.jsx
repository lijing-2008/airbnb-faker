import React, {memo, useEffect, useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group"
import PropTypes from 'prop-types'
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconDown from "@/assets/svg/icon_down";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
import IconUp from "@/assets/svg/icon_up";

const PictureBrowser = memo((props) => {
	const {closeClick, pictureUrls} = props
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isNext, setIsNext] = useState(true);
	const [isShowList, setIsShowList] = useState(true);
	//取消滚动条
	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "auto"
		}
	}, []);

	const closeBtnClickHandle = () => {
		if (closeClick) closeClick()
	}
	const arrowClickHandle = (isRight = true) => {
		let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
		if (newIndex > pictureUrls.length - 1) {
			newIndex = 0
		}
		if (newIndex < 0) {
			newIndex = pictureUrls.length - 1
		}
		setCurrentIndex(newIndex)
		setIsNext(isRight)
	}
	const handleItemClick = (index) => {
		index < currentIndex ? setIsNext(false) : setIsNext(true)
		setCurrentIndex(index)
	}
	const listEl = (
		<div className="list">
			<Indicator selectIndex={currentIndex}>
				{
					pictureUrls?.map((item, index) => {
						return (
							<div
								className={classNames("item", {active: index === currentIndex})}
								key={item}
								onClick={(e) => handleItemClick(index)}
							>
								<img src={item} alt="img"/>
							</div>
						)
					})
				}
			</Indicator>
		</div>
	)
	return (
		<BrowserWrapper isNext={isNext} isShowList={isShowList}>
			<div className="top">
				<div className="close-btn" onClick={() => closeBtnClickHandle()}>
					<IconClose/>
				</div>
			</div>
			<div className="slider">
				<div className="control">
					<div className="btn left" onClick={() => arrowClickHandle(false)}>
						<IconArrowLeft width={77} height={77}/>
					</div>
					<div className="btn right" onClick={() => arrowClickHandle()}>
						<IconArrowRight width={77} height={77}/>
					</div>
				</div>
				<div className="picture">
					<SwitchTransition mode="in-out">
						<CSSTransition
							key={pictureUrls[currentIndex]}
							classNames="pic"
							timeout={200}
						>
							<img src={pictureUrls[currentIndex]} alt="img"/>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			<div className="preview">
				<div className="info">
					<div className="desc">
						<div className="count">
							<div>{currentIndex + 1}/{pictureUrls.length}:room Apartment图片{currentIndex + 1}</div>
						</div>
						<div className="toggle" onClick={() => setIsShowList(!isShowList)}>
							<span>{isShowList ? "隐藏" : "显示"}照片列表</span>
							{isShowList ? <IconDown/> : <IconUp/>}
						</div>
					</div>
					{listEl}
				</div>
			</div>
		</BrowserWrapper>
	)
});
PictureBrowser.propTypes = {
	pictureUrls: PropTypes.array,
	closeClick: PropTypes.func
}
export default PictureBrowser;
