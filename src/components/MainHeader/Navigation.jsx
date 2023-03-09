import React from "react";
import AuthContext from "../../store/auth-context";

import Button from "../UI/Button/Button";
import classes from "./Navigation.module.scss";

const Navigation = ({ onLogout }) => {
	return (
		<AuthContext.Consumer>
			{(ctx) => {
				return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Users</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Admin</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<Button onClick={onLogout}>Logout</Button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Navigation;
