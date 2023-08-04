import './styles/projects.css';
import Role from './components/role';

const sonvisage = ["Liaise weekly with stakeholders to discuss progress and to set up new targets",
				   "Led a team of 6 engineers to build an ELK data pipeline for patient and environmental data collection on the Labulance, a rickshaw-ambulance hybrid, to facilitate enhanced maternal healthcare in rural Nigeria",
			       "Architected an encryption program using OpenSSL and C to safeguard confidential patient data collected during medical consultations for secure storage on the Labulance"]
const njordfrey = ["Spearheaded the migration of older software to newer and more maintainable technologies such as Python and SQL within 6 months",
				   "Engineered a data pipeline currently deployed in certain Rwandan farms that collects and performs analysis on Kibana  to identify possible factors contributing to reduced crop yields"]
const phs = ["Programmed backend of the web application using React that was utilized by over 1000 patients at the annual community screenings from August 21st - 22nd held by the NUS Yong Loo Lin School of Medicine",
		     "Implemented functionality for the patient data to be exported in various formats, including but not limited to PDFs that removed the need for doctors to manually track patient data in Excel files"]
const odyssey = ["Supervised development of platformer-visual novel hybrid using C# and Unity with up to 2 hours of gameplay time, 8,000 words of dialogue, and 80 different dynamic sprites",
				 "Coded object physics, especially movements related to falling and jumping within a 2-dimensional space to enable platformer mechanics"]

function Projects() {
	return (
		<div className='body'>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Role company="Sonvisage, Bridges for Enterprise" role="Director, Technical Advisory" description={sonvisage} dates="Ongoing" country="Nigeria" link="https://www.sonvisage.com/"></Role><br/>
			<Role company="NjordFrey, Bridges for Enterprise" role="Team Lead" description={njordfrey} dates="Jan 22 - Oct 22" country="Rwanda" link="https://www.njordfrey.com/about"></Role><br/>
			<Role company="Yong Loo Lin School of Medicine" role="Backend Developer" description={phs} dates="Oct 21 - Aug 22" country="Singapore"></Role><br/>
			<Role company="Team GorillaBear, NUS Orbital" role="Team Lead" description={odyssey} dates="May 21 - Aug 21" country="Singapore" link="https://youtu.be/MSHFh263E7I"></Role><br/>
		</div>
	)
}

export default Projects;
