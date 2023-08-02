import './styles/experience.css';
import Role from './components/role';

const ase = ["● Developed a web app using Next.js integrating various in-house and open-source tools, along with YARA/Sigma rules" + 
             " to streamline the detection of comprised systems to improve the effectiveness of Incident Response (IR) teams",
	         "● Documented existing and later-built architecture to facilitate codebase handover to other teams"]

const cti = ["● Built a real-time ELK pipeline for logs analysis from over 15 open-source worldwide honeypots that captured DDoS attacks occurring in the US and the resurgence of a well-known threat actor",
	         "● Deployed on-prem MySQL servers to store up to 6 months of logs for visualization on Kibana and Tableau for use in landscape and other cybersecurity reports",
		     "● Collaborated with other interns to program a Python scraping bot that filters articles based on specified tags to automate the distribution of relevant news to stakeholders"]


const ta = ["● Taught undergraduate students Java principles and related libraries",
			"● Instilled intermediate programming skills (functional programming, generics, and semi-large programs)",
			"● Initiated consultation sessions with students to provide additional guidance"]

function Experience() {
	return (
		<div id='experience'>
			<br/>
			<br></br>
			<br></br>
			<br></br>
			<Role company="Ensign InfoSecurity (Engineering)" role="Associate Security Engineer" description={ase} dates="Dec 22 - Feb 23"></Role><br/>
			<Role company="Ensign InfoSecurity (Consulting)" role="Cyber Threat Intelligence Intern" description={cti} dates="May 22 - Nov 22"></Role><br/>
			<Role company="Nat. University of Singapore" role="TA, CS2030S Programming M II" description={ta} dates="Jan 22 - Jun 22"></Role>
		</div>
	)
}

export default Experience;
