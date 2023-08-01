import React from 'react';
import '../styles/role.css';

function Role({company, role, description}) {
	return (
		<div>
			<div className="container">
				<b>{role}</b><br/>
				<b className="company">{company}</b>
				<React.Fragment>{description.map((text) => (<p id="text">{text}</p>))}</React.Fragment>
			</div>
		</div>
	)
}

export default Role;
