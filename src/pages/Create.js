import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { AcUnitOutlined,Send,KeyboardArrowRight } from "@material-ui/icons";

export default function Create() {
	return (
		<Container>
			<Typography
				variant='h6'
				component='h2'
				gutterBottom
				color='textSecondary'>
				Create a New Note
			</Typography>

			<Button
				type='submit'
				color='secondary'
				variant='contained'
				disableElevation
        endIcon={<KeyboardArrowRight/>}
        >
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
