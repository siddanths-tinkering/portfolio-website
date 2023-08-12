import { Helmet } from 'react-helmet';
import './styles/projects.css';
import Role from './components/role';

const sonvisage = ["Led a team of 6 engineers to build an ELK data pipeline for patient and environmental data collection on the Labulance, a rickshaw-ambulance hybrid, to facilitate enhanced maternal healthcare in rural Nigeria",
			       "Architected an encryption program using OpenSSL and C to safeguard confidential patient data collected during medical consultations for secure storage on the Labulance",
				   "Liaise weekly with stakeholders to discuss progress and set up new targets"]
const njordfrey = ["Spearheaded the migration of older software to newer and more maintainable technologies such as Python and SQL within 6 months",
				   "Engineered a data pipeline currently deployed in certain Rwandan farms that collects and performs analysis on Kibana  to identify possible factors contributing to reduced crop yields"]
const phs = ["Programmed the backend of a web application using React that was utilized by over 1000 patients at the annual community screenings from August 21st - 22nd held by the NUS Yong Loo Lin School of Medicine",
		     "Implemented functionality for the patient data to be exported in various formats, including but not limited to PDFs, that removed the need for doctors to manually track patient data in Excel files"]
const odyssey = ["Supervised the development of a platformer-visual novel hybrid using C# and Unity with up to 2 hours of gameplay time, 8,000 words of dialogue, and 80 different dynamic sprites",
				 "Coded object physics, especially movements related to falling and jumping within a 2-dimensional space to enable platformer mechanics"]
const nustracker = ["Developed the front-end of nustracker, an application that helps student organizations intuitively track large club memberships of up to 2000 members instead of using hard-to-maintain Excel files", 
					"Wrote and rephrased sections of the user and developer guides for release"]
const petal = ["Programmed a lightweight, CLI-based task-management software that allows students to keep track of events and their deadlines using a fixed set of short, simple commands"]

function Projects() {
	return (
		<div className='roles-container'>
			<Helmet>
				<meta charSet="utf-8" />
      			<title>Projects</title>
			</Helmet>
			<Role company="Sonvisage, Bridges for Enterprise" role="Director, Technical Advisory" description={sonvisage} dates="Ongoing" country="Nigeria (remote)" link="https://www.sonvisage.com/"></Role><br/>
			<Role company="NjordFrey, Bridges for Enterprise" role="Team Lead" description={njordfrey} dates="Jan 22 - Oct 22" country="Rwanda (remote)" link="https://www.njordfrey.com/about"></Role><br/>
			<Role company="Yong Loo Lin School of Medicine" role="Backend Developer" description={phs} dates="Oct 21 - Aug 22" country="Singapore"></Role><br/>
			<Role company="Team GorillaBear, NUS Orbital" role="Team Lead" description={odyssey} dates="May 21 - Aug 21" country="Singapore" link="https://youtu.be/MSHFh263E7I"></Role><br/>
			<Role company="nustracker" role="Developer and Code Quality" description={nustracker} dates="Aug 21 - Nov 21" country="Singapore" link="https://ay2122s1-cs2103t-t11-1.github.io/tp/UserGuide.html"></Role><br/>
			<Role company="Petal🌸" role="Developer" description={petal} dates="Aug 21 - Sep 21" country="Singapore" link="https://wowsiddanth.github.io/ip/"></Role><br/>
		</div>
	)
}

export default Projects;
