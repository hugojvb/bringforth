import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	footer: {
		padding: theme.spacing(4, 2),
		marginTop: "auto",
		backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
	},
	text: {
		textAlign: "center",
	},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Typography variant="body2" color="textSecondary" className={classes.text}>
						{"Copyright © "}
						<Link color="inherit" href="https://www.llresearch.org/">
							L/L Research All Rights Reserved {new Date().getFullYear()}
							{"."}
						</Link>{" "}
					</Typography>
				</Container>
			</footer>
		</div>
	);
}
