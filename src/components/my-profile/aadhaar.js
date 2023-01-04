import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import styles from "../../global.styles";

const Aadhaar = () => {
	return (
		<div className="w-full">
			<div>
				<h1 className={styles.profileStyle.profileHeader}>Aadhaar Details</h1>
				<span className={styles.profileStyle.profileHeaderInfo}>
					In here you can Add the Aadhaar details and verify.
				</span>
			</div>

			<div className={styles.profileStyle.bankingInputWrapper}>
				<div>
					<label
						htmlFor="aadhaar_number"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Aadhaar Number
					</label>
					<input
						type="text"
						id="aadhaar_number"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Aadhaar Number"
					/>
				</div>
			</div>
			<div className={styles.profileStyle.bankingInputWrapper}>
				<div>
					<label
						htmlFor="captcha"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Captcha
					</label>
					<div className="flex justify-start items-center">
						<img
							className={styles.profileStyle.aadhaarCaptchaWrapperImg}
							src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2014/09/avoid-captcha.jpg"
							alt="captcha"
						/>
						<button
							className={styles.profileStyle.aadhaarCaptchaWrapperImgRefresh}
						>
							<FiRefreshCw />
						</button>
						<input
							type="text"
							id="captcha"
							className={styles.profileStyle.profileInputWrapperLabelInput}
							placeholder="Captcha"
						/>
					</div>
				</div>
			</div>

			<div className={styles.profileStyle.profileActions}>
				<button className={styles.profileStyle.profileActionsEditBtn}>
					Add Aadhaar
				</button>
			</div>

			<div className={styles.globalStyles.divider}></div>
		</div>
	);
};

export default Aadhaar;
