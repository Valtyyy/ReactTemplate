import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";

function App(){

	//state


	//behaviour


	//render
	return(
		<>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</>
	)
}

export default App;
