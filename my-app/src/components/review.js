import React from 'react';
import '../styles/review.css';

function Review({title, sentence, rating, video}) {
	return (
		<div>
			<div className="container">
				<div className="review-container-1">
					<div className="review-container-2">
						<b className="title">{title}</b>
						<p className="sentence">{sentence}</p>
					</div>
					<b className="rating">{rating}</b>
					<img src={video} id="GIF"></img>
				</div>
			</div>
		</div>
	)
}

export default Review;
