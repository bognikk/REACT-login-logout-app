import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.scss";

const MainHeader = ({ isAuthenticated, onLogout }) => {
	return (
		<header className={classes["main-header"]}>
			<h1>A Typical Page</h1>
			<Navigation onLogout={onLogout} />
		</header>
	);
};

export default MainHeader;
