import './styles/experience.css';
import Role from './components/role';

const nus = ["GPA: 4.5/5.0", "Completed an exchange program with Yonsei University (Spring 2023)"]
const techskills = ["Languages: Python, Java, C++, C, JavaScript, SQL (PostgreSQL & MySQL), HTML5/CSS3", "Visualisation: Kibana, Tableau, R",
 					"Frameworks/Libraries: React, Next.js, OpenSSL, NumPy, OpenCV", "Cloud computing: AWS/Google Cloud/Azure",
					"Others: UNIX, Elasticsearch, Logstash, Kafka, Git, Vim, Docker, YARA, Sigma, Bash, Kubernetes, Figma"];

function Education() {
	return (
		<div className='experience'>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Role company="National University of Singapore" role="Computer Science with Honours" description={nus} dates="Graduating Jun 2024"></Role><br/>
			<Role company="Learnt over school and work" role="Skills" description={techskills} dates="" country=""></Role><br/>
		</div>
	)
}

export default Education;
