import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Container,
	makeStyles,
} from "@material-ui/core";
import { AcUnitOutlined, Send, KeyboardArrowRight } from "@material-ui/icons";

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
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDetailsError(false);
		setTitleError(false);
    
		!title && setTitleError(true);
		!details && setDetailsError(true);

		if (title && details) {
			console.log(title, details);
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
				/>
				<Button
					type='submit'
					color='secondary'
					variant='contained'
					endIcon={<KeyboardArrowRight />}>
					Submit
				</Button>
			</form>
			{/* <br />
			<AcUnitOutlined />
			<AcUnitOutlined color='secondary' fontSize='large' />
			<AcUnitOutlined color='secondary' fontSize='small' />
			<AcUnitOutlined color='action' fontSize='small' />
			<AcUnitOutlined color='error' fontSize='small' />
			<AcUnitOutlined color='disabled' fontSize='small' /> */}
		</Container>
	);
}
