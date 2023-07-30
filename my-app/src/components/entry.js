import React from 'react';
import '../styles/entry.css';

const ase = ["● Developed a web app using Next.js integrating various in-house and open-source tools, along with YARA/Sigma rules" + 
             "to streamline the detection of comprised systems to improve the effectiveness of Incident Response (IR) teams",
	         "● Documented existing and later-built architecture to facilitate codebase handover to other teams"]

const cti = ["● Built a real-time ELK pipeline for logs analysis from over 15 open-source worldwide honeypots that captured DDoS attacks occurring in the US and the resurgence of a well-known threat actor",
	         "● Deployed on-prem MySQL servers to store up to 6 months of logs for visualization on Kibana and Tableau for use in landscape and other cybersecurity reports",
		     "● Collaborated with other interns to program a Python scraping bot that filters articles based on specified tags to automate the distribution of relevant news to stakeholders"]


const ta = ["● Taught undergraduate students Java principles and related libraries",
			"● Instilled intermediate programming skills (functional programming, generics, and semi-large programs)",
			"● Initiated consultation sessions with students to provide additional guidance"]

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

function Entry() {
	return (
		<div className='body'>
			<br/>
			<Role company="Ensign InfoSecurity" role="Associate Security Engineer" description={ase}></Role><br/>
			<Role company="Ensign InfoSecurity" role="Cyber Threat Intelligence Consulting Intern" description={cti}></Role><br/>
			<Role company="Nat. University of Singapore" role="TA, CS2030S Programming Methodology II" description={ta}></Role>
		</div>

	)
}

export default Entry;