// REACT
import React from "react";
// CSS
import "./App.css";
// COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routes/Routers";

function App() {
	return (
		<main>
			<Header />
			<Routers />
			<Footer />
		</main>
	);
}

export default App;
