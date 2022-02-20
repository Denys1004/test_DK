import React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

// Styles
import './App.scss';

const theme = createTheme({
	palette: {
		primary: {
			main: "#3DC8A6",
			light: '#3c44b126'
		},
		secondary: {
			main: "#f83245",
			light: '#f8324526'
		},
		background: {
			default: "#3DC8A6"
		},
	},
	overrides:{
		MuiAppBar:{
			root:{
				transform:'translateZ(0)'
			}
		}
	},
	props:{
		MuiIconButton:{
			disableRipple:true
		}
	}
});


const App = () => {

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/results/" element={<ResultsPage/>} />
					<Route path="*" element={<ErrorPage/>} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App;