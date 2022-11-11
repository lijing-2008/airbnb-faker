import React from "react";

const HomeContext = React.createContext({
	rowNum: 2,
	isPlus: false,
	itemWidth: "25%"
})

export {
	HomeContext
}
