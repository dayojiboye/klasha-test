import React from "react";
import { Route, Routes } from "react-router-dom";
import dashRoutes from "./DashRoutes";
import PageLayout from "components/PageLayout/PageLayout";

const NotFound = () => {
	return <h1>Page Not Found</h1>;
};

export default function Dashbase() {
	return (
		<>
			<Routes>
				<Route path="" element={<PageLayout />}>
					{dashRoutes.map((parentRoute, index) => {
						const ParentElement = parentRoute.component;
						return <Route key={index} path={parentRoute.path} element={<ParentElement />} />;
					})}
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}
