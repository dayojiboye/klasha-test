import Dashbase from "components/Dashbase/Dashbase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NotFound = () => {
	return <h1>Page Not Found</h1>;
};

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<>
						{/* <Route path="/" element={<Dashbase />} /> */}
						<Route path="/*" element={<Dashbase />} />
					</>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
