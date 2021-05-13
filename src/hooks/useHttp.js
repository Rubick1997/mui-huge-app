import { useState } from "react";
import { useHistory } from "react-router";

const useHttp = (request, title, details, category) => {
	const [notes, setNotes] = useState([]);
	const history = useHistory();
	let sendRequest;
	let deleteHandler;
	if (request === "POST") {
		sendRequest = () => {
			fetch("http://localhost:8000/notes", {
				method: request,
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, details, category }),
			}).then(() => {
				history.push("/");
			});
		};
	} else if (request === "DELETE") {
		deleteHandler = async (id) => {
			await fetch("http://localhost:8000/notes/" + id, {
				method: request,
			});
			const newNotes = notes.filter((note) => note.id !== id);
			setNotes(newNotes);
		};
	} else {
		sendRequest = () => {
			fetch("http://localhost:8000/notes")
				.then((response) => response.json())
				.then((data) => setNotes(data));
		};
	}
	return { sendRequest, notes, deleteHandler };
};
export default useHttp;
