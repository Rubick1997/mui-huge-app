import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Container,
	Radio,
	FormControlLabel,
	FormControl,
	FormLabel,
	RadioGroup,
	makeStyles,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import useHttp from "../hooks/useHttp";

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: "block",
	},
});

export default function Create() {
	const classes = useStyles();

	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState("todos");
	const [details, setDetails] = useState("");
	const { sendRequest } = useHttp("POST", title, details, category);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDetailsError(false);
		setTitleError(false);

		!title && setTitleError(true);
		!details && setDetailsError(true);

		if (title && details) {
			sendRequest();
		}
	};

	return (
		<Container>
			<Typography
				className={classes.title}
				variant='h6'
				component='h2'
				gutterBottom
				color='textSecondary'>
				Create a New Note
			</Typography>
			<form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className={classes.field}
					label='Note Title'
					variant='outlined'
					color='secondary'
					fullWidth
					required
					error={titleError}
					inputProps={{
						"data-testid": "input",
					}}
				/>

				<TextField
					onChange={(e) => {
						setDetails(e.target.value);
					}}
					className={classes.field}
					label='Details'
					variant='outlined'
					color='secondary'
					multiline
					rows={4}
					fullWidth
					required
					error={detailsError}
					inputProps={{
						"data-testid": "input2",
					}}
				/>
				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}>
						<FormControlLabel control={<Radio />} label='Money' value='money' />
						<FormControlLabel control={<Radio />} label='Todos' value='todos' />
						<FormControlLabel
							control={<Radio />}
							label='Reminders'
							value='reminders'
						/>
						<FormControlLabel control={<Radio />} label='Work' value='work' />
					</RadioGroup>
				</FormControl>
				<Button
					data-testid="button"
					type='submit'
					color='secondary'
					variant='contained'
					endIcon={<KeyboardArrowRight />}>
					Submit
				</Button>
			</form>
		</Container>
	);
}
