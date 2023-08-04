import React from 'react';
import '../styles/role.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink	} from '@fortawesome/free-solid-svg-icons'

function Role({company, role, description, dates, link="", country="Singapore"}) {
	return (
		<div>
			<div className="container">
				<div className="container-2">
					<div className="container-3">
						<b>{role} </b>
						{link == "" ? "" : <a href={link}><FontAwesomeIcon className="icon" icon={faLink} /></a>}<br/>
						<b className="company">{company}</b>
					</div>
					<div className='container-4'>
						<b className="dates">{dates}</b><br/>
						<b className="company">{country}</b><br/>
					</div>
				</div>
				<React.Fragment>
					<ul>
						{description.map((text) => (<li className="text">{text}</li>))}
					</ul>
				</React.Fragment>
			</div>
		</div>
	)
}

export default Role;
