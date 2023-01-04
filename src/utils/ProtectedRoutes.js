import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isError }) => {
	// console.log("isError", isError);
	return isError ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
