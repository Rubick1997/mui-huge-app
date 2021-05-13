import React, { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { Container, Grid, Paper } from "@material-ui/core";

export default function Notes() {
	const { sendRequest, notes } = useHttp();

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	return (
		<Container>
			<Grid container>
				{notes.map((note) => (
					<Grid item key={note.id} xs ={12} md ={6} lg={4}>
						<Paper>{note.title}</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
