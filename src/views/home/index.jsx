import React, {memo, useEffect} from 'react';
import ddRequest from "@/services"

const Home = memo((props) => {
	useEffect(() => {
		ddRequest.get({url: "/home/highscore"}).then(( res ) => {
			console.log("结果:",res)
		})
		return () => {

		};
	}, []);

	return (
		<div>Home</div>
	)
});

export default Home;
