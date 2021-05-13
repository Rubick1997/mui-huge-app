import React, { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp"

export default function Notes() {
const {sendRequest,notes} = useHttp()

	useEffect(() => {
    sendRequest()
	},[]);

	return (<div>
    {notes.map(note =>(
      <p key={note.id} >
        {note.title}
      </p>
    ))}
  </div>)
}
