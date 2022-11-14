import routes from "./router";
import {useRoutes} from "react-router-dom"
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import {Suspense} from "react";

function App() {
	return (
		<div className="App">
			<AppHeader/>
			<Suspense fallback="loading...">
				<div className="page">
					{useRoutes(routes)}
				</div>
			</Suspense>
			<AppFooter/>
		</div>
	);
}

export default App;
