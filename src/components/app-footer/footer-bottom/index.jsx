import React, {memo} from 'react';
import {FooterBottomWrapper} from "./style";
import policeImg from "@/assets/img/police.png"
import licenseImg from "@/assets/img/license.png"
import IconSingleLogo from "../../../assets/svg/utils/icon_logo1";
import IconWeibo from "../../../assets/svg/icon_weibo";
import IconChat from "../../../assets/svg/icon_chat";

const FooterBottom = memo((props) => {
	return (
		<FooterBottomWrapper>
			<div className="left">
				<div className="logo">
					<IconSingleLogo/>
				</div>
				<div className="text">
					<div className="top">
						<a href="http://beian.miit.gov.cn/">京ICP备16017121号</a>
						<a href="http://beian.miit.gov.cn/">京ICP证 160773号</a>
						<img src={policeImg} alt="police"/>
						<a href="http://beian.miit.gov.cn/">京公网安备 11010502032345号</a>
						<span>安彼迎网络（北京）有限公司</span>
						<img src={licenseImg} alt="license"/>
						<a href="http://beian.miit.gov.cn/">营业执照</a>
					</div>
					<div className="bottom">
						<span>© 2022 Airbnb, Inc. All rights reserved.</span>
						<a href="http://beian.miit.gov.cn/">条款</a>·
						<a href="http://beian.miit.gov.cn/">隐私政策</a>·
						<a href="http://beian.miit.gov.cn/">网站地图</a>·
						<span>全国旅游投诉渠道 12301</span>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="item">
					<IconWeibo/>
				</div>
				<div className="item">
					<IconChat/>
				</div>
			</div>
		</FooterBottomWrapper>
	)
});

export default FooterBottom;
