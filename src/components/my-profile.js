import React, { useState } from "react";
import styles from "../global.styles";
import { FaChevronRight } from "react-icons/fa";
import Profile from "./my-profile/profile";
import BankDetails from "./my-profile/bank-details";
import MembershipDetails from "./my-profile/membership-details";
import Aadhaar from "./my-profile/aadhaar";
import PanCard from "./my-profile/pan-card";

const MyProfile = () => {
	const [active, setActive] = useState(0);

	const sidemenu = [
		{
			key: "profile",
			name: "Profile",
		},
		{
			key: "bank_details",
			name: "Bank Details",
		},
		{
			key: "aadhaar",
			name: "Aadhaar",
		},
		{
			key: "pan_card",
			name: "PAN Card",
		},
		{
			key: "membership",
			name: "Membership Details",
		},
	];

	function selectedSideMenu() {
		switch (active) {
			case 0:
				return <Profile />;

			case 1:
				return <BankDetails />;

			case 2:
				return <Aadhaar />;

			case 3:
				return <PanCard />;

			case 4:
				return <MembershipDetails />;

			default:
				break;
		}
	}

	return (
		<div className={styles.globalStyles.wrappedContainer}>
			<div className={styles.profileStyle.profileContainer}>
				<div className={styles.profileStyle.profileLeftWrapper}>
					{sidemenu.map((menu, index) => (
						<button
							key={menu.key}
							onClick={() => setActive(index)}
							className={
								active === index
									? styles.profileStyle.profileLeftBtnActive
									: styles.profileStyle.profileLeftBtn
							}
						>
							{menu.name}
							<FaChevronRight />
						</button>
					))}
				</div>
				<div className={styles.profileStyle.profileRightWrapper}>
					{selectedSideMenu()}
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
