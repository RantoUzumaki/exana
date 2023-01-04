import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../global.styles";
import { selectUser } from "../../store/slices/userSlice";
import { FiTrash2 } from "react-icons/fi";
import userDummyImg from "./../../assets/user.svg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import flags from "../../utils/flags";
import { toast } from "react-toastify";

const Profile = () => {
	const [values, setValues] = useState({
		image: "",
		dropdown: false,
		dropdownValue: "+91",
		editContext: false,
	});

	const user = useSelector(selectUser);
	console.log(user);

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setValues({
				...values,
				image: URL.createObjectURL(event.target.files[0]),
			});
		}
	};

	const removeImage = (event) => {
		let val = document.getElementById("profileImageUploadImageInput");
		val.value = null;
		setValues({
			...values,
			image: "",
		});
	};

	const handleUpdate = () => {
		let cnfm = window.confirm("Are you sure you want to update the details");
		if (cnfm) {
			toast.success("Details Updated.");
		}
	};

	return (
		<div className="w-full">
			<div>
				<h1 className={styles.profileStyle.profileHeader}>Profile</h1>
				<span className={styles.profileStyle.profileHeaderInfo}>
					In here you can edit the details of your profile.
				</span>
			</div>

			<div className={styles.profileStyle.profileImageUploadContainer}>
				<div className={styles.profileStyle.profileImageUploadContainerContent}>
					<div className={styles.profileStyle.profileImageUploadleftSide}>
						<div
							className={styles.profileStyle.profileImageUploadImageContainer}
						>
							<img
								className={styles.profileStyle.profileImageUploadImage}
								src={values.image || userDummyImg}
								alt="userDummyImg"
							/>
							{values.image ? (
								<button
									onClick={removeImage}
									className={styles.profileStyle.profileImageUploadImageRemove}
								>
									<FiTrash2 />
								</button>
							) : null}
						</div>
						<label
							className={styles.profileStyle.profileImageUploadImageInputLabel}
						>
							<input
								id="profileImageUploadImageInput"
								onChange={onImageChange}
								accept="image/png, image/gif, image/jpeg"
								className={styles.profileStyle.profileImageUploadImageInput}
								type="file"
							/>
						</label>
					</div>
					<div className={styles.profileStyle.profileImageUploadRightSide}>
						<button className={styles.profileStyle.profileImageUploadbtn}>
							Upload
						</button>
						<button
							disabled={values.image ? false : true}
							onClick={removeImage}
							className={styles.profileStyle.profileImageUploadCancelBtn}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>

			<div className={styles.profileStyle.profileInputWrapper}>
				<div>
					<label
						htmlFor="first_name"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						First name
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="first_name"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="First Name"
					/>
				</div>
				<div>
					<label
						htmlFor="last_name"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Last name
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="last_name"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Last Name"
					/>
				</div>
				<div>
					<label
						htmlFor="address1"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Address 1
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="address1"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Address Line 1"
					/>
				</div>
				<div>
					<label
						htmlFor="address2"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Address 2
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="address2"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Address Line 2"
					/>
				</div>
				<div>
					<label
						htmlFor="phone"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Phone number
					</label>
					<div className={styles.profileStyle.phoneNumberWithCountryCode}>
						<div
							disabled={!values.editContext}
							tabIndex="0"
							onBlur={() => setValues({ ...values, dropdown: false })}
							className={styles.profileStyle.phoneNumberCountryDropdown}
						>
							<div
								onClick={() =>
									setValues({ ...values, dropdown: !values.dropdown })
								}
								className={styles.profileStyle.phoneNumberCountryDropdownText}
							>
								{values.dropdownValue}
								{values.dropdown ? (
									<FaChevronUp className="ml-2" />
								) : (
									<FaChevronDown className="ml-2" />
								)}
							</div>
							{values.dropdown ? (
								<div
									className={
										styles.profileStyle.phoneNumberCountryDropdownContent
									}
								>
									{flags.map((items) => (
										<div
											onClick={(e) => {
												console.log(e.target);
												setValues({
													...values,
													dropdownValue: e.target.lastChild.innerHTML,
													dropdown: false,
												});
											}}
											className={
												styles.profileStyle
													.phoneNumberCountryDropdownContentItems
											}
										>
											<span>{items.name}</span>
											<span>{items.dial_code}</span>
										</div>
									))}
								</div>
							) : null}
						</div>
						<input
							disabled={!values.editContext}
							type="tel"
							id="phone"
							className={styles.profileStyle.phoneNumberInput}
							placeholder="123-45-678"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="city"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						City
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="city"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="City"
					/>
				</div>
				<div>
					<label
						htmlFor="district"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						District
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="district"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="District"
					/>
				</div>
				<div>
					<label
						htmlFor="state"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						State
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="state"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="State"
					/>
				</div>
				<div>
					<label
						htmlFor="country"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Country
					</label>
					<input
						disabled={!values.editContext}
						type="text"
						id="country"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Country"
					/>
				</div>
				<div>
					<label
						htmlFor="pincode"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Pincode
					</label>
					<input
						disabled={!values.editContext}
						type="number"
						id="pincode"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="pincode"
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Email address
					</label>
					<input
						disabled={!values.editContext}
						type="email"
						id="email"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="Email Address"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className={styles.profileStyle.profileInputWrapperLabel}
					>
						Password
					</label>
					<input
						disabled={!values.editContext}
						type="password"
						id="password"
						className={styles.profileStyle.profileInputWrapperLabelInput}
						placeholder="•••••••••"
					/>
				</div>
			</div>

			<div className={styles.profileStyle.profileActions}>
				{values.editContext ? (
					<>
						<button
							onClick={() => setValues({ ...values, editContext: false })}
							className={styles.profileStyle.profileActionsCancelBtn}
						>
							Cancel
						</button>
						<button
							onClick={handleUpdate}
							className={styles.profileStyle.profileActionsUpdateBtn}
						>
							Update
						</button>
					</>
				) : (
					<button
						onClick={() => setValues({ ...values, editContext: true })}
						className={styles.profileStyle.profileActionsEditBtn}
					>
						Edit
					</button>
				)}
			</div>
		</div>
	);
};

export default Profile;
