import React from 'react';
import '../styles/role.css';

function Role({interest, }) {
	return (
		<div>
			<div className="container">
				<div className="container-2">
					<div className="container-3">
						<b>{role}</b><br/>
						<b className="company">{company}</b>
					</div>
					<div className='container-4'>
						<text className="dates">{dates}</text><br/>
						<b className="company">{country}</b><br/>
					</div>
				</div>
				<React.Fragment>{description.map((text) => (<p className="text">{text}</p>))}</React.Fragment>
			</div>
		</div>
	)
}

export default Role;
