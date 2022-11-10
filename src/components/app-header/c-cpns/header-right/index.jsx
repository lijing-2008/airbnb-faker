import React, {memo, useEffect, useState} from 'react';
import {HeaderRightWrapper} from "./style";
import IconEarth from "@/assets/svg/icon_earth";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo((props) => {
	const [isShow, setIsShow] = useState(false);
	useEffect(() => {
		function windowHandleClick() {
			setIsShow(false)
		}

		window.addEventListener("click", windowHandleClick, true)
		return () => {
			window.removeEventListener("click", windowHandleClick, true)
		};
	}, []);

	return (
		<HeaderRightWrapper>
			<div className="btns">
				<span className="btn">登录</span>
				<span className="btn">注册</span>
				<span className="btn"><IconEarth/></span>
			</div>
			<div className="profile" onClick={() => setIsShow(true)}>
				<div className="menu">
					<IconMenu/>
				</div>
				<div className="avatar">
					<IconAvatar/>
				</div>
				{isShow &&
					<div className="menu-list">
						<div className="top">
							<div className="item register">注册</div>
							<div className="item login">登录</div>
						</div>
						<div className="bottom">
							<div className="item">出租房源</div>
							<div className="item">开展体验</div>
							<div className="item">帮助</div>
						</div>
					</div>
				}
			</div>
		</HeaderRightWrapper>
	)
});

export default HeaderRight;
