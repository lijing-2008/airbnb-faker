import ddRequest from "../index"
export function getHomeGoodPriceInfo() {
	return ddRequest.get({
		url: "/home/goodprice"
	})
}
export function getHomeHighScoreInfo() {
	return ddRequest.get({
		url: "/home/highscore"
	})
}
export function getHomeDiscountInfo() {
	return ddRequest.get({
		url: "/home/discount"
	})
}
export function getHomeRecommendInfo() {
	return ddRequest.get({
		url: "/home/hotrecommenddest"
	})
}
