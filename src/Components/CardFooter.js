import React from "react";
import classes from "./CardFooter.module.css";

const CardFooter = () => {
	return (
		<div className={classes.cardFooter}>
			<img className={classes.avatar} src="images/avatar-michelle.jpg" alt="" />
			<div className={classes.nameDate}>
				<p>Michelle Appleton</p>
				<p>28 Jun 2020</p>
			</div>
			<button className={classes.share}>
				<img src="images/icon-share.svg" alt="" />
			</button>
		</div>
	);
};

export default CardFooter;
