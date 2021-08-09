import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./card";
import * as actions from "../actions";

const Page1 = () => {
	const page1 = useSelector(state => state.page1);
	const dispatch = useDispatch();
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<h1>Page 1</h1>
				<Link to="/page-1">
					<button>Page 1</button>
				</Link>
				<Link to="/page-2">
					<button>Page 2</button>
				</Link>
				<Link to="/page-3">
					<button>Page 3</button>
				</Link>
				<input
					type="search"
					placeholder="Type to search..."
					name="search"
					id="searchbox"
					onChange={event => dispatch(actions.searchPage1(event.target.value))}
				/>
			</div>
			<div className="cardlist">
				{page1.map((movie, index) => (
					<Card movie={movie} key={index} />
				))}
			</div>
		</>
	);
};

export default Page1;
