import './styles/experience.css';
import Role from './components/role';

const nus = ["●	GPA: 4.5/5.0", "● Completed exchange program with Yonsei University"]

function Education() {
	return (
		<div id='experience'>
			<Role company="National University of Singapore" role="Computer Science with Honours" description={nus} dates="Graduating Jun 2024"></Role><br/>
		</div>
	)
}

export default Education;
