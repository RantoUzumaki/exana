import React from "react";
import styles from "../../global.styles";
import { BsBank2 } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

const BankDetails = () => {
	const handleAdd = () => {
		alert("Added");
	};

	return (
		<div className="w-full">
			<div>
				<h1 className={styles.profileStyle.profileHeader}>Bank Details</h1>
				<span className={styles.profileStyle.profileHeaderInfo}>
					In here you can edit the details of your bank section, Can add
					multiple accounts upto 5.
				</span>
			</div>

			<div className={styles.profileStyle.bankingInputWrapper}>
				<div>
					<label
						htmlFor="bank_name"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Bank Name
					</label>
					<input
						type="text"
						id="bank_name"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Bank Name"
					/>
				</div>
				<div>
					<label
						htmlFor="ifsc_code"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						IFSC Code
					</label>
					<input
						type="text"
						id="ifsc_code"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="IFSC Code"
					/>
				</div>
				<div>
					<label
						htmlFor="account_number"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Account Number
					</label>
					<input
						type="text"
						id="account_number"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Account Number"
					/>
				</div>
				<div>
					<label
						htmlFor="cnfm_account_number"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Confirm Account Number
					</label>
					<input
						type="text"
						id="cnfm_account_number"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Confirm Account Number"
					/>
				</div>
			</div>

			<div className={styles.profileStyle.profileActions}>
				<button
					onClick={handleAdd}
					className={styles.profileStyle.profileActionsUpdateBtn}
				>
					Add
				</button>
			</div>

			<div className={styles.globalStyles.divider}></div>

			<div className={styles.profileStyle.bankWrap}>
				<div className={styles.profileStyle.bankWrapContent}>
					<div className={styles.profileStyle.iconContent}>
						<div className={styles.profileStyle.iconCircle}>
							<BsBank2 />
						</div>
						<div className={styles.profileStyle.contentWrap}>
							<span>
								<strong>Bank Name: </strong>State Bank of India
							</span>
							<span>
								<strong>IFSC Code: </strong>SBIN0000000
							</span>
							<span>
								<strong>Account Number: </strong>1234****9874
							</span>
						</div>
					</div>
					<div className={styles.profileStyle.bankAction}>
						<button className={styles.profileStyle.bankActionDelete}>
							<FiTrash2 />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BankDetails;
