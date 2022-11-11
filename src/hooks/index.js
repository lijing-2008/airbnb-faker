import {useContext} from "react";
import {HomeContext} from "@/context";

function useHomeContext() {
	const homeContext = useContext(HomeContext)
	const rowNum = homeContext.rowNum
	const itemWidth = homeContext.itemWidth
	const isPlus = homeContext.isPlus
	return{
		rowNum,
		itemWidth,
		isPlus
	}
}


export {
	useHomeContext
}
