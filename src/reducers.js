const page1 = require("./JSON/CONTENTLISTINGPAGE-PAGE1.json").page[
	"content-items"
].content;
const page2 = require("./JSON/CONTENTLISTINGPAGE-PAGE2.json").page[
	"content-items"
].content;
const page3 = require("./JSON/CONTENTLISTINGPAGE-PAGE3.json").page[
	"content-items"
].content;

const initialState = { items: page1, query: "", current: 1 };

export const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case "LOAD_MORE_ITEMS":
			return state.current === 1
				? {
						...state,
						items: [...page1, ...page2].filter(movie =>
							movie.name.toLowerCase().includes(state.query)
						),
				  }
				: {
						...state,
						items: [...page1, ...page2, ...page3].filter(movie =>
							movie.name.toLowerCase().includes(state.query)
						),
				  };

		case "SEARCH_MOVIES":
			return {
				...state,
				query: action.payload.toLowerCase(),
				current: 1,
				items: [...state.items].filter(movie =>
					movie.name.toLowerCase().includes(action.payload.toLowerCase())
				),
			};

		case "SET_CURRENT":
			return { ...state, current: action.payload };

		default:
			return state;
	}
};
