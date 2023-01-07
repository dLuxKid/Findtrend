import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";

const Routers = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Homepage />} />
			{/* <Route exact path='/' element={<Homepage />} /> */}
		</Routes>
	);
};

export default Routers;
