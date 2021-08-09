import React from "react";

const Card = movie => {
	return (
		<div className="card">
			<h2>{movie.movie.name}</h2>
			<img
				src={
					movie.movie["poster-image"] === `posterthatismissing.jpg`
						? `/images/placeholder_for_missing_posters.png`
						: `/images/${movie.movie["poster-image"]}`
				}
				alt="Movie pic"
			/>
		</div>
	);
};

export default Card;
