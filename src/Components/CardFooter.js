import React, { useState } from "react";
import classes from "./CardFooter.module.css";

const CardFooter = () => {
	const [buttonIsClicked, setButtonIsClicked] = useState(false);

	return (
		<div className={`${classes.cardFooter} ${buttonIsClicked ? classes.cardFooterClicked : ""}`}>
			<div className={`${classes.socialMediaHidden} ${buttonIsClicked ? classes.socialMediaVisible : ""}`}>
				<p>SHARE</p>
				<div className={classes.socialIcons}>
					<img src="images/icon-facebook.svg" alt="" />
					<img src="images/icon-twitter.svg" alt="" />
					<img src="images/icon-pinterest.svg" alt="" />
				</div>
			</div>
			<div className={`${classes.footerText} ${buttonIsClicked ? classes.footerTextHidden : ""}`}>
				<img className={classes.avatar} src="images/avatar-michelle.jpg" alt="" />
				<div className={classes.nameDate}>
					<p>Michelle Appleton</p>
					<p>28 Jun 2020</p>
				</div>
			</div>
			<button className={classes.shareBtn} onClick={() => setButtonIsClicked(!buttonIsClicked)}>
				<img src="images/icon-share.svg" alt="" />
			</button>
		</div>
	);
};

export default CardFooter;
