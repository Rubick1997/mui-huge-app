import React from "react";
import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import { AcUnitOutlined, Send, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
	btn: {
		fontSize: 60,
		backgroundColor: "violet",
		"&:hover": {
			backgroundColor: "blue",
		},
	},
	title: {
		textDecoration: "underline",
		marginBottom: 20,
	},
});

export default function Create() {
	const classes = useStyles();

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

			<Button
				className={classes.btn}
				type='submit'
				color='secondary'
				variant='contained'
				disableElevation
				endIcon={<KeyboardArrowRight />}>
				Submit
			</Button>
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
