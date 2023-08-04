import './styles/projects.css';
import Role from './components/role';

const sonvisage = ["Lead a team of 6 engineers to build a ELK data pipeline to collect and store patient and environmental data, to facilitate better medical access in rural Nigeria",
			       "Architected an encryption program using OpenSSL and C to safeguard confidential patient data collected on the vehicle for later transmission"]
const njordfrey = ["Designed a data collection system using ELK and AWS EC2 that is currently deployed in 2 Rwandan farms to aid in identification of areas with low crop yields",
				   "Liaised weekly with Rwandan stakeholders to provide updates on progress and to understand requirements for future tasks"]
const phs = ["Programmed backend of the web application using React that was utilized by over 1000 patients at the annual community screenings from August 21st - 22nd held by the NUS Yong Loo Lin School of Medicine",
		     "Implemented functionality for the patient data to be exported in various formats, including but not limited to PDFs that removed the need for doctors to manually track patient data in Excel files"]
const odyssey = ["Supervised development of platformer/visual novel hybrid using C# and Unity with 1-2 hours of gameplay time and 8,000 words of dialogue",
				 "Coded object physics, especially movements related to falling and jumping within a 2-dimensional space to enable platformer mechanics"]

function Projects() {
	return (
		<div className='body'>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Role company="Sonvisage, Bridges for Enterprise" role="Director, Technical Advisory" description={sonvisage} dates="Ongoing" country="Nigeria"></Role><br/>
			<Role company="NjordFrey, Bridges for Enterprise" role="Team Lead" description={njordfrey} dates="Jan 22 - Oct 22" country="Rwanda"></Role><br/>
			<Role company="Yong Loo Lin School of Medicine" role="Backend Developer" description={phs} dates="Oct 21 - Aug 22" country="Singapore"></Role><br/>
			<Role company="Team GorillaBear, NUS Orbital" role="Team Lead" description={odyssey} dates="May 21 - Aug 21" country="Singapore"></Role><br/>
		</div>
	)
}

export default Projects;
