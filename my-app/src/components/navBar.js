import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = ({active}) => {
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === ""
										? "nav-item active"
										: "nav-item"
								}
							>
							<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
							<Link to="/education">Education</Link>
							</li>
							<li
								className={
									active === "experience"
										? "nav-item active"
										: "nav-item"
								}
							>
							<Link to="/experience">Experience</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
							<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "interests"
										? "nav-item active"
										: "nav-item"
								}
							>
							<Link to="/reccos">Game Reccos</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;