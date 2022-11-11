import {isEmptyObject} from "@/utils/is_empty_object";

function calcListNum(itemWidth, rowNum) {
	const widthPercent = itemWidth.replace("%", "")/100
	return Math.floor(rowNum / widthPercent)
}

export {
	isEmptyObject,
	calcListNum
}
