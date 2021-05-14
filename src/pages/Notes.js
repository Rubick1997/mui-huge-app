import React, { useEffect} from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../components/NodeCard";
import useHttp from "../hooks/useHttp";

export default function Notes() {
  const { state, deleteHandler,sendRequest } = useHttp();

	useEffect(() => {
		sendRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Grid container spacing={3}>
				{state.map((note) => (
					<Grid item key={note.id} xs={12} md={6} lg={4}>
						<NoteCard note={note} handleDelete={deleteHandler} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
