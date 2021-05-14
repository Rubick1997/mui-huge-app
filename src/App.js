import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { NotesContext } from "./context/NotesContext";
import Layout from "./components/Layout";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#fefefe",
		},
		secondary: purple,
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {


	return (
		<ThemeProvider theme={theme}>
			<NotesContext.Provider>
				<Router>
					<Layout>
						<Switch>
							<Route exact path='/'>
								<Notes />
							</Route>
							<Route path='/create'>
								<Create />
							</Route>
						</Switch>
					</Layout>
				</Router>
			</NotesContext.Provider>
		</ThemeProvider>
	);
}

export default App;
