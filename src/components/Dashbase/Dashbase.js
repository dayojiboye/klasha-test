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
					{dashRoutes.map((groups, index) => {
						const ParentElement = groups.component;

						return (
							<Route key={index} path="" element={<ParentElement />}>
								{groups.routes.map((group, groupIndex) => {
									const ChildElement = group.component;

									return <Route key={groupIndex} path={group.path} element={<ChildElement />} />;
								})}
							</Route>
						);
					})}
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}
