import {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { NotesContext } from "./context/NotesContext";

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
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState("todos");

	return (
		<ThemeProvider theme={theme}>
			<NotesContext.Provider
				value={{
					title,
					setTitle,
					details,
					setDetails,
					titleError,
					setTitleError,
					detailsError,
					setDetailsError,
					category,
					setCategory,
				}}>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Notes />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
					</Switch>
				</Router>
			</NotesContext.Provider>
		</ThemeProvider>
	);
}

export default App;
