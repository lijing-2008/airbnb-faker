import React, {memo} from 'react';
import {FooterWrapper} from "./style";
import listData from "@/assets/data/footer.json"
import FooterSection from "./footer-info";
import FooterBottom from "./footer-bottom";
const AppFooter = memo((props) => {
	return (
		<FooterWrapper>
			<div className="footer">
				<div className="container">
					<div className="top">
						{
							listData.map(( item ) => {
								return(
									<FooterSection key={item.name} name={item.name} list={item.list}/>
								)
							})
						}
					</div>
					<div className="bottom">
						<FooterBottom/>
					</div>
				</div>
			</div>
		</FooterWrapper>
	)
});

export default AppFooter;
