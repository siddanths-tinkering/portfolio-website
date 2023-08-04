import React from 'react';
import '../styles/review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Review({title, sentence, link, video}) {
	return (
		<div>
			<a href={link}>
				<div className="container">
					<div className="review-container-1">
						<div className="review-container-2">
							<b className="title">{title} </b>
							<a><FontAwesomeIcon className='icon' icon={faLink} /></a>
							<p className="sentence">{sentence}</p>
						</div>
						<b className="rating">{}</b>
						<div className="image">
							<img src={video} id="GIF"></img>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}

export default Review;
