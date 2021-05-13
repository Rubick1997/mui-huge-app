import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography } from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

function NodeCard({ note,handleDelete }) {

	return (
		<div>
			<Card elevation={1}>
				<CardHeader
					action={
						<IconButton onClick ={() => {
                          handleDelete(note.id)
                        }}>
							<DeleteOutlined />
						</IconButton>
					}
                    title={note.title}
                    subheader={note.category}
				/>
                <CardContent>
                    <Typography variant = "body2" color ="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
			</Card>
		</div>
	);
}

export default NodeCard;
