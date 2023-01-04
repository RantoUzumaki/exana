const loginStyle = {
	wrapper: [
		"w-screen",
		"h-screen",
		"flex",
		"justify-center",
		"items-center",
		"relative",
	].join(" "),
	wrapperContent: [
		"w-4/5", //
		"h-4/5",
		"shadow-xl",
		"rounded-xl",
		"flex",
	].join(" "),
	wrapperLeft: [
		"w-2/3",
		"h-full",
		"rounded-tl-xl",
		"rounded-bl-xl",
		"bg-gradient-to-b",
		"from-blue-light",
		"via-blue-dark",
		"to-blue-extra",
		"flex",
		"justify-center",
		"items-start",
		"flex-col",
		"pl-16",
	].join(" "),
	textHead: [
		"text-6xl", //
		"font-bold",
		"tracking-tighter",
		"text-white",
	].join(" "),
	textSubHead: [
		"text-xl", //
		"text-normal",
		"text-white",
		"mt-3",
		"mb-5",
	].join(" "),
	loginReadMoreBtn: [
		"px-6",
		"py-3",
		"rounded-xl",
		"text-white",
		"bg-blue/[0.5]",
		"hover:bg-blue/[1]",
		"hover:text-white",
		"text-indigo-100",
		"transition-all",
		"duration-200",
	].join(" "),
	wrapperRight: [
		"w-1/3",
		"h-full",
		"flex",
		"justify-center",
		"items-center",
		"relative",
		"bg-white",
		"rounded-tr-xl",
		"rounded-br-xl",
	].join(" "),
	wrapperRightContent: [
		"flex", //
		"flex-col",
		"w-6/12",
	].join(" "),
	rightTextHead: [
		"text-2xl",
		"font-medium",
		"tracking-tighter",
		"text-black",
	].join(" "),
	rightTextSubHead: [
		"text-l",
		"text-normal",
		"text-black",
		"mt-1",
		"mb-5",
	].join(" "),
	forgetPassBtn: [
		"p-0",
		"w-fit",
		"mt-2",
		"mr-0",
		"ml-auto",
		"text-xs",
		"text-black",
		"hover:text-blue",
		"transition-all",
		"duration-200",
	].join(" "),
	loginBtn: [
		"px-6",
		"py-3",
		"rounded-xl",
		"text-white",
		"bg-blue-light",
		"hover:bg-blue-dark",
		"transition-all",
		"duration-200",
	].join(" "),
	wrapperRightTop: [
		"absolute",
		"top-5",
		"flex",
		"justify-between",
		"left-5",
		"right-5",
	].join(" "),
	homeBtn: [
		"flex", //
		"p-0",
		"items-center",
		"group",
		"text-black",
		"hover:text-blue",
	].join(" "),
	homeBtnIcon: [
		"mr-3", //
		"stroke-black",
		"group-hover:stroke-blue",
	],
	singUpBtm: [
		"flex", //
		"items-center",
		"group",
		"text-black",
		"text-base",
		"hover:text-blue",
	].join(" "),
	singUpBtnIcon: [
		"ml-1", //
		"stroke-black",
		"group-hover:stroke-blue",
	].join(" "),
	modelWrapper: [
		"absolute", //
		"flex",
		"justify-center",
		"items-center",
		"top-0",
		"bottom-0",
		"left-0",
		"right-0",
		"backdrop-blur",
		"transition-all",
		"duration-300",
	].join(" "),
	modelWrapperHide: [
		"absolute", //
		"hidden",
		"justify-center",
		"items-center",
		"top-0",
		"bottom-0",
		"left-0",
		"right-0",
		"backdrop-blur",
		"transition-all",
		"duration-300",
	].join(" "),
	modelWrapperMain: [
		"relative", //
		"w-1/4",
		"h-max",
		"bg-white",
		"border",
		"border-blue",
		"rounded-2xl",
	].join(" "),
	modelWrapperContent: [
		"p-4", //
		"border",
		"border-blue",
		"rounded-2xl",
	].join(" "),
	modelWrapperHead: [
		"flex", //
		"border-b",
		"pb-4",
		"border-blue",
		"justify-between",
		"items-center",
	].join(" "),
	modelWrapperHeaderContent: [
		"text-xl", //
		"font-semibold",
	].join(" "),
	modelWrapperCloseBtn: [
		"hover:border", //
		"group",
		"hover:border-blue",
		"hover:rounded-xl",
		"p-2",
		"border",
		"border-transparent",
		"m-0",
		"transition-all",
	].join(" "),
	modelWrapperCloseBtnSvg: [
		"group-hover:text-blue", //
	].join(" "),
	modelWrapperbody: [
		"pt-4", //
		"flex",
		"flex-col",
	].join(" "),
	modelWrapperSendBtn: [
		"px-6", //
		"py-2",
		"w-fit",
		"ml-auto",
		"border",
		"border-blue",
		"rounded-xl",
		"hover:bg-blue",
		"hover:text-white",
		"transition-all",
	].join(" "),
};

const registerStyle = {
	wrapper: [
		"w-screen",
		"h-screen",
		"flex",
		"justify-center",
		"items-center",
	].join(" "),
	wrapperContent: [
		"w-4/5", //
		"h-4/5",
		"shadow-xl",
		"rounded-xl",
		"flex",
	].join(" "),
	wrapperLeft: [
		"w-2/3",
		"h-full",
		"rounded-tl-xl",
		"rounded-bl-xl",
		"bg-gradient-to-b",
		"from-blue-light",
		"via-blue-dark",
		"to-blue-extra",
		"flex",
		"justify-center",
		"items-start",
		"flex-col",
		"pl-16",
	].join(" "),
	textHead: [
		"text-6xl", //
		"font-bold",
		"tracking-tighter",
		"text-white",
	].join(" "),
	textSubHead: [
		"text-xl", //
		"text-normal",
		"text-white",
		"mt-3",
		"mb-5",
	].join(" "),
	registerReadMoreBtn: [
		"px-6",
		"py-3",
		"rounded-xl",
		"text-white",
		"bg-blue/[0.5]",
		"hover:bg-blue/[1]",
		"hover:text-white",
		"text-indigo-100",
		"transition-all",
		"duration-200",
	].join(" "),
	wrapperRight: [
		"w-1/3",
		"h-full",
		"flex",
		"justify-center",
		"items-center",
		"relative",
		"bg-white",
		"rounded-tr-xl",
		"rounded-br-xl",
	].join(" "),
	wrapperRightContent: [
		"flex", //
		"flex-col",
		"w-6/12",
	].join(" "),
	rightTextHead: [
		"text-2xl",
		"font-medium",
		"tracking-tighter",
		"text-black",
	].join(" "),
	rightTextSubHead: [
		"text-l",
		"text-normal",
		"text-black",
		"mt-1",
		"mb-5",
	].join(" "),
	registerBtn: [
		"px-6",
		"py-3",
		"rounded-xl",
		"text-white",
		"bg-blue-light",
		"hover:bg-blue-dark",
		"transition-all",
		"duration-200",
	].join(" "),
	registerBtnDisabled: [
		"px-6",
		"py-3",
		"rounded-xl",
		"text-white",
		"bg-gray",
		"transition-all",
		"duration-200",
	].join(" "),
	wrapperRightTop: [
		"absolute",
		"top-5",
		"flex",
		"justify-between",
		"left-5",
		"right-5",
	].join(" "),
	homeBtn: [
		"flex", //
		"p-0",
		"items-center",
		"group",
		"text-black",
		"hover:text-blue",
	].join(" "),
	homeBtnIcon: [
		"mr-3", //
		"stroke-black",
		"group-hover:stroke-blue",
	],
	singinBtm: [
		"flex", //
		"items-center",
		"group",
		"text-black",
		"text-base",
		"hover:text-blue",
	].join(" "),
	singinBtnIcon: [
		"ml-1", //
		"stroke-black",
		"group-hover:stroke-blue",
	].join(" "),
	verifyEmail: [
		"text-center", //
		"opacity-75",
		"text-black",
		"mt-5",
	].join(" "),
};

const homeStyle = {};

const profileStyle = {
	profileContainer: [
		"w-full", //
		"flex",
		"border",
		"border-blue",
		"profileHeight",
		"rounded-lg",
	].join(" "),
	profileLeftWrapper: [
		"w-1/4", //
		"flex",
		"flex-col",
		"bg-blue",
		"rounded-bl-lg",
		"rounded-tl-lg",
	].join(" "),
	profileLeftBtn: [
		"w-full", //
		"text-slate-400",
		"px-4",
		"py-4",
		"m-0",
		"flex",
		"justify-between",
		"items-center",
		"border-b",
		"border-blue-dark",
		"transition-all",
		"duration-200",
		"hover:text-white",
	].join(" "),
	profileLeftBtnActive: [
		"w-full", //
		"text-white",
		"text-left",
		"px-4",
		"py-4",
		"m-0",
		"flex",
		"justify-between",
		"items-center",
		"border-b",
		"border-blue-dark",
	].join(" "),
	profileRightWrapper: [
		"w-3/4", //
		"h-full",
		"p-4",
		"bg-white",
		"rounded-br-lg",
		"overflow-x-hidden",
		"overflow-y-auto",
		"rounded-tr-lg",
	].join(" "),
	profileHeader: [
		"text-blue", //
		"text-2xl",
		"leading-5",
		"font-bold",
		"uppercase",
	].join(" "),
	profileHeaderInfo: [
		"text-slate-500", //
		"text-sm",
		"font-normal",
	].join(" "),
	profileImageUploadContainer: [
		"flex", //
		"w-full",
		"h-max",
		"justify-between",
		"my-8",
		"items-center",
	].join(" "),
	profileImageUploadContainerContent: [
		"flex", //
		"w-full",
		"items-center",
		"justify-between",
		"shadow-[0_0_20px_4px_rgba(0,0,0,0.1)]",
		"bg-white",
		"p-4",
		"rounded-md",
	].join(" "),
	profileImageUploadleftSide: [
		"flex", //
		"items-center",
		"space-x-6",
	].join(" "),
	profileImageUploadImageContainer: [
		"shrink-0", //
		"relative",
	].join(" "),
	profileImageUploadImage: [
		"h-16", //
		"w-16",
		"object-cover",
		"rounded-full",
		"border",
		"border-blue",
	].join(" "),
	profileImageUploadImageRemove: [
		"absolute", //
		"-bottom-2",
		"-right-2",
		"p-2",
		"bg-red-400",
		"rounded-full",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-red-700",
	].join(" "),
	profileImageUploadImageInputLabel: [
		"block", //
	].join(" "),
	profileImageUploadImageInput: [
		"block ", //
		"w-full",
		"text-sm",
		"text-slate-500",
		"file:mr-4",
		"file:py-2",
		"file:px-4",
		"file:rounded-full",
		"file:border-0",
		"file:text-sm",
		"file:font-semibold",
		"file:bg-blue-light",
		"file:text-white",
		"hover:file:bg-blue-extra",
	].join(" "),
	profileImageUploadRightSide: [
		"flex", //
		"items-center",
		"space-x-4",
	].join(" "),
	profileImageUploadbtn: [
		"px-4", //
		"py-2",
		"rounded-md",
		"bg-blue",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-blue-extra",
	].join(" "),
	profileImageUploadCancelBtn: [
		"px-4", //
		"py-2",
		"rounded-md",
		"bg-red-400",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-red-700",
		"disabled:opacity-75",
		"disabled:hover:bg-red-400",
	].join(" "),
	profileInputWrapper: [
		"grid", //
		"gap-6",
		"mb-6",
		"md:grid-cols-2",
	].join(" "),
	profileInputWrapperLabel: [
		"block", //
		"mb-2",
		"text-sm",
		"font-medium",
		"text-black",
	].join(" "),
	profileInputWrapperLabelInput: [
		"bg-gray-50", //
		"border",
		"border-gray",
		"text-black",
		"text-md",
		"rounded-lg",
		"focus:outline-blue",
		"hover:border-blue",
		"block",
		"w-full",
		"p-2",
		"disabled:opacity-75",
		"disabled:hover:border-gray",
	].join(" "),
	phoneNumberWithCountryCode: [
		"flex", //
		"justify-between",
		"items-center",
		"w-full",
		"bg-gray-50",
		"border",
		"border-gray",
		"text-black",
		"group",
		"text-md",
		"rounded-lg",
		"hover:border-blue",
		"p-2",
	].join(" "),
	phoneNumberCountryDropdown: [
		"relative", //
		"w-1/4",
	].join(" "),
	phoneNumberCountryDropdownText: [
		"flex", //
		"justify-between",
		"items-center",
		"cursor-pointer",
		"border-r",
		"pr-2",
		"w-full",
		"border-gray",
		"select-none",
		"transition-all",
		"duration-200",
	].join(" "),
	phoneNumberCountryDropdownContent: [
		"absolute", //
		"top-[150%]",
		"bg-blue-extra-light",
		"-left-2",
		"w-max",
		"min-h-max",
		"max-h-64",
		"rounded-md",
		"overflow-y-auto",
		"p-3.5",
		"text-left",
		"shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]",
	].join(" "),
	phoneNumberCountryDropdownContentItems: [
		"p-2.5", //
		"border-b",
		"flex",
		"items-center",
		"justify-between",
		"border-[#acacac]",
		"text-black",
		"cursor-pointer",
		"select-none",
		"hover:text-blue-extra-light",
		"hover:bg-blue",
		"hover:rounded-md",
	].join(" "),
	phoneNumberInput: [
		"w-full", //
		"focus:outline-none",
		"h-full",
		"pl-2",
		"group-focus: outline-blue",
		"group-hover: outline-blue",
	].join(" "),
	profileActions: [
		"w-full", //
		"flex",
		"justify-end",
		"items-center",
		"space-x-3",
		"mb-1",
	].join(" "),
	profileActionsEditBtn: [
		"px-4", //
		"py-2",
		"rounded-md",
		"bg-blue",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-blue-extra",
		"disabled:opacity-75",
		"disabled:hover:bg-blue",
	].join(" "),
	profileActionsCancelBtn: [
		"px-4", //
		"py-2",
		"rounded-md",
		"bg-red-400",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-red-700",
		"disabled:opacity-75",
		"disabled:hover:bg-red-400",
	].join(" "),
	profileActionsUpdateBtn: [
		"px-4", //
		"py-2",
		"rounded-md",
		"bg-blue",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-blue-extra",
		"disabled:opacity-75",
		"disabled:hover:bg-blue",
	].join(" "),
	bankingInputWrapper: [
		"grid", //
		"gap-6",
		"my-6",
		"md:grid-cols-2",
	].join(" "),
	bankWrap: [
		"w-full", //
		"h-max",
		"mt-6",
	].join(" "),
	bankWrapContent: [
		"w-full", //
		"h-max",
		"flex",
		"items-center",
		"justify-between",
		"p-4",
		"border",
		"border-blue",
		"rounded-xl",
		"mb-4",
	].join(" "),
	iconContent: [
		"flex", //
		"items-center",
		"justify-start",
	].join(" "),
	iconCircle: [
		"flex", //
		"items-center",
		"justify-center",
		"bg-blue-light",
		"text-white",
		"rounded-full",
		"w-16",
		"h-16",
		"text-xl",
	].join(" "),
	contentWrap: [
		"flex", //
		"flex-col",
		"ml-4",
	].join(" "),
	bankActionDelete: [
		"p-3", //
		"bg-red-400",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-red-700",
		"rounded-md",
	].join(" "),
	aadhaarCaptchaWrapperImg: [
		"h-16", //
		"mr-3",
		"w-28",
	].join(" "),
	aadhaarCaptchaWrapperImgRefresh: [
		"cursor-pointer", //
		"bg-blue",
		"rounded-full",
		"p-2",
		"mr-3",
		"text-white",
	].join(" "),
};

const headerNavStyle = {
	headerWrapper: [
		"mx-auto", //
		"max-w-7xl",
		"py-2",
		"flex",
		"items-center",
		"justify-between",
	].join(" "),
	headerLeft: [
		"flex", //
		"items-center",
		"justify-between",
		"gap-x-8",
	].join(" "),
	logoImg: [
		"h-16", //
	].join(" "),
	headerLeftBtn: [
		"p-0", //
		"m-0",
		"transition-all",
		"duration-200",
		"border-b-4",
		"border-transparent",
		"hover:text-blue",
		"hover:border-b-4",
		"hover:border-blue",
	].join(" "),
	headerLeftBtnActive: [
		"p-0", //
		"m-0",
		"transition-all",
		"duration-200",
		"text-blue",
		"border-b-4",
		"border-blue",
	].join(" "),
	headerRight: [
		"flex", //
		"items-center",
		"justify-between",
		"gap-x-8",
	].join(" "),
	signupBtn: [
		"px-5", //
		"py-2",
		"rounded-xl",
		"border",
		"border-blue",
		"bg-blue",
		"text-white",
		"transition-all",
		"duration-200",
		"hover:bg-blue-dark",
		"hover:border-blue-dark",
	].join(" "),
	loginBtn: [
		"px-5", //
		"py-2",
		"rounded-xl",
		"border",
		"border-blue",
		"text-black",
		"transition-all",
		"duration-200",
		"hover:bg-blue",
		"hover:border-blue",
		"hover:text-white",
	].join(" "),
	profileDropdown: [
		"group", //
		"rounded-xl",
		"text-black",
		"cursor-pointer",
		"flex",
		"w-max",
		"relative",
		"justify-between",
		"items-center",
		"transition-all",
		"duration-200",
		"hover:text-blue-light",
	].join(" "),
	profileDropdownActive: [
		"group", //
		"rounded-xl",
		"text-blue-light",
		"cursor-pointer",
		"flex",
		"w-max",
		"relative",
		"justify-between",
		"items-center",
	].join(" "),
	profileDropdownName: [
		"font-medium", //
		"mr-1.5",
	].join(" "),
	profileDropdownImg: [
		"h-7", //
		"w-7",
		"mr-1.5",
	].join(" "),
	profileDropdownIcon: [
		"transition-all", //
		"duration-200",
	].join(" "),
	profileDropdownItemMenu: [
		"absolute", //
		"top-[125%]",
		"bg-blue-extra-light",
		"right-0",
		"w-48",
		"min-h-max",
		"rounded-md",
		"p-3.5",
		"text-left",
		"shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]",
	].join(" "),
	profileDropdownItem: [
		"p-2.5", //
		"border-b",
		"border-[#acacac]",
		"text-black",
		"hover:text-blue-extra-light",
		"hover:bg-blue",
		"hover:rounded-md",
	].join(" "),
	profileDropdownItemLast: [
		"p-2.5", //
		"text-black",
		"hover:text-blue-extra-light",
		"hover:bg-blue",
		"hover:rounded-md",
	].join(" "),
};

const globalStyles = {
	inputWithIconLabel: [
		"relative", //
		"block",
		"mb-4",
	].join(" "),
	inputWithIconSpan: [
		"absolute",
		"inset-y-0",
		"left-0",
		"flex",
		"items-center",
		"pl-2",
	].join(" "),
	inputWithIconPasswordSpan: [
		"absolute",
		"inset-y-0",
		"right-0",
		"flex",
		"items-center",
		"pr-2",
		"cursor-pointer",
	].join(" "),
	inputWithIconIcon: [
		"text-blue", //
		"w-5",
		"h-5",
	].join(" "),
	inputWithIconIconError: [
		"text-red-500", //
		"w-5",
		"h-5",
	].join(" "),
	inputWithIconPasswordIcon: [
		"text-black", //
		"w-5",
		"h-5",
	].join(" "),
	inputWithIcon: [
		"placeholder:text-slate-400",
		"block",
		"bg-blue-extra-light",
		"w-full",
		"border",
		"border-slate-300",
		"rounded-xl",
		"py-2",
		"pl-9",
		"pr-3",
		"shadow-sm",
		"focus:outline-none",
		"focus:border-sky-500",
		"focus:ring-sky-500",
		"focus:ring-1",
		"sm:text-s",
	].join(" "),
	inputWithIconError: [
		"block",
		"bg-red-50",
		"w-full",
		"border",
		"border-red-500",
		"text-red-500",
		"rounded-xl",
		"py-2",
		"pl-9",
		"pr-3",
		"shadow-sm",
		"focus:outline-none",
		"focus:border-red-500",
		"focus:ring-red-500",
		"focus:ring-1",
		"sm:text-s",
	].join(" "),
	errorDiv: [
		"flex", //
		"text-red-500",
		"w-full",
		"mb-4",
		"flex-col",
		"text-xs",
	].join(" "),
	wrappedContainer: [
		"max-w-7xl", //
		"mx-auto",
	].join(" "),
	divider: [
		"w-full", //
		"my-3",
		"border-b",
		"border-blue",
		"h-1",
	].join(" "),
};

const styles = {
	loginStyle,
	globalStyles,
	registerStyle,
	homeStyle,
	headerNavStyle,
	profileStyle,
};

export default styles;
