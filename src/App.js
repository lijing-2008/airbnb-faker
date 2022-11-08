import routes from "./router";
import {useRoutes} from "react-router-dom"

function App() {
	return (
		<div className="App">
			<div className="header">header</div>
			<div className="page">
				{useRoutes(routes)}
			</div>
			<div className="footer">footer</div>
		</div>
	);
}

export default App;
