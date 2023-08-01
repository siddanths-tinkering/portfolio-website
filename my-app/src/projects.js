import './styles/projects.css';
import Role from './components/role';

const sonvisage = ["● Lead a team of 6 engineers to build a ELK data pipeline to collect and store patient and environmental data, to facilitate better medical access in rural Nigeria",
			       "● Architected an encryption program using OpenSSL and C to safeguard confidential patient data collected on the vehicle for later transmission"]
const njordfrey = ["● Designed a data collection system currently deployed in 2 Rwandan farms to help identify areas of low crop yields"]
const phs = ["●	Programmed backend of the web application that was utilized by over 1000 patients at the annual community screenings from August 21st - 22nd held by the NUS Yong Loo Lin School of Medicine",
		     "●	Implemented functionality for the patient data to be exported in various formats, including but not limited to PDFs that removed the need for doctors to manually track patient data in Excel files"]

function Projects() {
	return (
		<div className='body'>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Role company="Sonvisage, Bridges for Enterprise" role="Director, Technical Advisory" description={sonvisage} dates="Ongoing" country="Nigeria"></Role><br/>
			<Role company="NjordFrey, Bridges for Enterprise" role="Team Lead" description={njordfrey} dates="Jan 22 - Oct 22" country="Rwanda"></Role><br/>
			<Role company="Yong Loo Lin School of Medicine" role="Backend Developer" description={phs} dates="Oct 21 - Aug 22" country="Singapore"></Role><br/>
		</div>
	)
}

export default Projects;
