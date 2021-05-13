import { useState } from "react";
import { useHistory } from "react-router";

const useHttp = (request, title, details, category) => {
	const [notes, setNotes] = useState([]);
	const history = useHistory();
	let sendRequest;
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
	} else {
		sendRequest = () => {
			fetch("http://localhost:8000/notes")
				.then((response) => response.json())
				.then((data) => setNotes(data));
		};
	}
	return { sendRequest, notes };
};
export default useHttp;
