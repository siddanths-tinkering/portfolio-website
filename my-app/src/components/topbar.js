import '../styles/topbar.css';

const categories = ["Games", "Video", "Books"];

function TopBar() {
	return (
		<div className="bar">
			{categories.map((cat) => <b className="type">{cat}</b>)}
		</div>
	);
}


export default TopBar;