import React, {memo, useState} from 'react';
import Indicator from "@/base-ui/indicator";
import {DemoWrapper} from "@/views/demo/style";

const Demo = memo((props) => {
	const names = ["abc", "cba", "nba", "aaa", "bbb", "ccc"]
	const [selectedIndex, setSelectedIndex] = useState(0);
	const toggleClickHandle = (isNext = true) => {
		let newIndex = isNext ? selectedIndex + 1 : selectedIndex - 1
		if (newIndex < 0) {
			newIndex = names.length - 1
		}
		if (newIndex === names.length) {
			newIndex = 0
		}
		setSelectedIndex(newIndex)
	}
	return (
		<DemoWrapper>
			<button onClick={() => toggleClickHandle(false)}>prev</button>
			<button onClick={() => toggleClickHandle()}>next</button>
			<div className="list">
				<Indicator selectIndex={selectedIndex}>
					{
						names.map((item) => {
							return (
								<button key={item}>{item}</button>
							)
						})
					}
				</Indicator>
			</div>

		</DemoWrapper>
	)
});
Demo.propTypes = {}
export default Demo;
