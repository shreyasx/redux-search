const page1 = require("./JSON/CONTENTLISTINGPAGE-PAGE1.json");
const page2 = require("./JSON/CONTENTLISTINGPAGE-PAGE2.json");
const page3 = require("./JSON/CONTENTLISTINGPAGE-PAGE3.json");

const initialState = {
	page1: page1.page["content-items"].content,
	page2: page2.page["content-items"].content,
	page3: page3.page["content-items"].content,
};

export const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case "SEARCH_PAGE_1":
			return {
				...state,
				page1: page1.page["content-items"].content.filter(movie =>
					movie.name.toLowerCase().includes(action.payload.toLowerCase())
				),
			};
		case "SEARCH_PAGE_2":
			return {
				...state,
				page2: page2.page["content-items"].content.filter(movie =>
					movie.name.toLowerCase().includes(action.payload.toLowerCase())
				),
			};
		case "SEARCH_PAGE_3":
			return {
				...state,
				page3: page3.page["content-items"].content.filter(movie =>
					movie.name.toLowerCase().includes(action.payload.toLowerCase())
				),
			};
		default:
			return state;
	}
};
