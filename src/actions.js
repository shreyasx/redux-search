import * as types from "./types";

export const loadMoreItems = (current, query) => ({
	type: types.LOAD_MORE_ITEMS,
	payload: { current, query },
});

export const filterMovies = query => ({
	type: types.SEARCH_MOVIES,
	payload: query,
});

export const setCurrent = value => ({
	type: types.SET_CURRENT,
	payload: value,
});
