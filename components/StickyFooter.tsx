import React from "react";

import { CssBaseline, Typography, Container, Link, Grid, Divider, List, ListItem, Select, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
		flexGrow: 1,
	},
	footer: {
		padding: theme.spacing(4, 6),
		marginTop: "auto",
		backgroundColor: "#fff",
	},
	text: {
		marginTop: "5vh",
		textAlign: "center",
	},
	grid: {},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container maxWidth="lg" className={classes.footer}>
				<Divider variant="fullWidth" />
				<br />
				<footer>
					<Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.grid}>
						<Grid container item xs={12} sm={3} spacing={3}>
							<Box>
								<Image src="/footer.jpg" height="70" width="70" />{" "}
							</Box>

							<Typography variant="h6">Bring4th</Typography>
						</Grid>
						<Grid container item xs={6} sm={3} spacing={3}>
							<List>
								<Typography variant="subtitle1">Company</Typography>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid container item xs={6} sm={3} spacing={3}>
							<List>
								<Typography variant="subtitle1">Company</Typography>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Seeker Connector">
									<Typography variant="body2">
										<Link color="inherit" href="/privacy">
											Privacy Policy
										</Link>
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid container xs={6} sm={3} spacing={3}>
							<List>
								<Typography variant="subtitle1">Language</Typography>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={lang} onChange={handleChange}
								></Select>
							</List>
						</Grid>
					</Grid>
					<Container maxWidth="md">
						<Typography variant="body2" color="textSecondary" className={classes.text}>
							{"Copyright © "}
							{new Date().getFullYear()}{" "}
							<Link color="inherit" href="https://www.llresearch.org/">
								L/L Research All. Rights Reserved
								{"."}
							</Link>
						</Typography>
					</Container>
				</footer>
			</Container>
		</div>
	);
}
