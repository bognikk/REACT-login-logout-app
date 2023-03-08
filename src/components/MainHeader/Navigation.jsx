import React from "react";

import Button from "../UI/Button/Button";
import classes from "./Navigation.module.scss";

const Navigation = ({ isLoggedIn, onLogout }) => {
	return (
		<nav className={classes.nav}>
			<ul>
				{isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{isLoggedIn && (
					<li>
						<Button onClick={onLogout}>Logout</Button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
