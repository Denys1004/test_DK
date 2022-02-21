import React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from '../components/AppRouter';

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

				<AppRouter />

			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App;