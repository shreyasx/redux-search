import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";
import * as actions from "./actions";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

const App = () => {
	const items = useSelector(state => state.items);
	const current = useSelector(state => state.current);

	const dispatch = useDispatch();

	const fetchData = () => {
		if (current === 1)
			setTimeout(() => {
				dispatch(actions.loadMoreItems(1));
				dispatch(actions.setCurrent(2));
			}, 500);

		if (current === 2)
			setTimeout(() => {
				dispatch(actions.loadMoreItems(2));
				dispatch(actions.setCurrent(3));
			}, 500);
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
					onChange={event => dispatch(actions.filterMovies(event.target.value))}
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
