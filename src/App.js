import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./style.css";
const p1 = React.lazy(() => import("./components/p1"));
const p2 = React.lazy(() => import("./components/p2"));
const p3 = React.lazy(() => import("./components/p3"));

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Suspense fallback={null}>
					<Route path="/" exact component={() => <Redirect to="/page-1" />} />
					<Route path="/page-1" exact component={p1} />
					<Route path="/page-2" exact component={p2} />
					<Route path="/page-3" exact component={p3} />
				</Suspense>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
