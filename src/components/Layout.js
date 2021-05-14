import React from "react";
import { useHistory, useLocation } from "react-router";
import {
	makeStyles,
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: "#f9f9f9",
			width: "100%",
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		root: {
			display: "flex",
		},
		active: {
			background: "#f4f4f4",
		},
		title: {
			padding: theme.spacing(2),
		},
	};
});

function Layout({ children }) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const noteItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color='secondary' />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlineOutlined color='secondary' />,
			path: "/create",
		},
	];

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}>
				<div>
					<Typography variant='h5' className={classes.title}>
						Notes
					</Typography>
				</div>
				<List>
					{noteItems.map((item) => (
						<ListItem
							key={item.text}
							button
							onClick={() => {
								history.push(item.path);
							}}
							className={
								location.pathname === item.path ? classes.active : null
							}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className={classes.page}>{children}</div>
		</div>
	);
}

export default Layout;
