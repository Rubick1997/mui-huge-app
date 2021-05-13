import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../components/NodeCard";

export default function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then((response) => response.json())
			.then((data) => setNotes(data));
	}, []);

	const deleteHandler = async (id) => {
		await fetch("http://localhost:8000/notes/" + id, {
			method: "DELETE",
		});

		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item key={note.id} xs={12} md={6} lg={4}>
						<NoteCard note={note} handleDelete={deleteHandler} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
