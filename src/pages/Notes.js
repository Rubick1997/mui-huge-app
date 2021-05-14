import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NodeCard";
import useHttp from "../hooks/useHttp";
import Masonry from "react-masonry-css";

export default function Notes() {
	const { state, deleteHandler, sendRequest } = useHttp();

	useEffect(() => {
		sendRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'>
				{state.map((note) => (
					<div item key={note.id}>
						<NoteCard note={note} handleDelete={deleteHandler} />
					</div>
				))}
			</Masonry>
		</Container>
	);
}
