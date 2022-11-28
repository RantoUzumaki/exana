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
};

const homeStyle = {};

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
    "w-44", //
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
};

const styles = {
  loginStyle,
  globalStyles,
  registerStyle,
  homeStyle,
  headerNavStyle,
};

export default styles;
