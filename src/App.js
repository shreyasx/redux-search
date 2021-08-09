import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";
import * as actions from "./actions";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

const App = () => {
	const page1 = useSelector(state => state.page1);
	const page2 = useSelector(state => state.page2);
	const page3 = useSelector(state => state.page3);
	const [items, setItems] = React.useState(page1);
	const [current, setCurrent] = React.useState(1);
	const dispatch = useDispatch();

	const fetchData = () => {
		if (current === 1)
			setTimeout(() => {
				setCurrent(2);
				setItems([...page1, ...page2]);
			}, 1000);

		if (current === 2)
			setTimeout(() => {
				setCurrent(3);
				setItems([...page1, ...page2, ...page3]);
			}, 1000);
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<input
					type="search"
					placeholder="Type to search..."
					name="search"
					id="searchbox"
					onChange={event => dispatch(actions.searchPage1(event.target.value))}
				/>
			</div>
			<InfiniteScroll
				dataLength={items.length}
				next={fetchData}
				hasMore={current < 3}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all.</b>
					</p>
				}
			>
				<div className="cardlist">
					{items.map((movie, index) => (
						<Card movie={movie} key={index} />
					))}
				</div>
			</InfiniteScroll>
		</>
	);
};

export default App;
