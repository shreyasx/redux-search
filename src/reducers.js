import * as types from "./types";

const page1 = require("./JSON/CONTENTLISTINGPAGE-PAGE1.json").page[
	"content-items"
].content;
const page2 = require("./JSON/CONTENTLISTINGPAGE-PAGE2.json").page[
	"content-items"
].content;
const page3 = require("./JSON/CONTENTLISTINGPAGE-PAGE3.json").page[
	"content-items"
].content;

const initialState = { items: page1, current: 1 };

export const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.LOAD_MORE_ITEMS:
			return state.current === 1
				? {
						...state,
						items: [...page1, ...page2].filter(movie =>
							movie.name.toLowerCase().includes(action.payload.query)
						),
				  }
				: {
						...state,
						items: [...page1, ...page2, ...page3].filter(movie =>
							movie.name.toLowerCase().includes(action.payload.query)
						),
				  };

		case types.SEARCH_MOVIES:
			return {
				...state,
				current: 1,
				items: [...page1, ...page2, ...page3]
					.filter(movie =>
						movie.name.toLowerCase().includes(action.payload.toLowerCase())
					)
					.filter((movie, index) => index < 20),
			};

		case types.SET_CURRENT:
			return { ...state, current: action.payload };

		default:
			return state;
	}
};
