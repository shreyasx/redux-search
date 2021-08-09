export const loadMoreItems = current => ({
	type: "LOAD_MORE_ITEMS",
	payload: current,
});

export const filterMovies = query => ({
	type: "SEARCH_MOVIES",
	payload: query,
});

export const setCurrent = value => ({
	type: "SET_CURRENT",
	payload: value,
});
