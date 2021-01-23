import React from "react";

import { CssBaseline, Typography, Container, Link, Grid, Divider, List, ListItem, Select } from "@material-ui/core";

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
	brandName: {
		marginLeft: "15px",
	},
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
					<Grid container direction="row" justify="center" spacing={3}>
						<Grid container item xs={12} sm={3} spacing={3} alignItems="center">
							<Image src="/footer.jpg" height="70" width="70" />{" "}
							<Typography variant="h6" className={classes.brandName}>
								Bring4th
							</Typography>
						</Grid>
						<Grid container item xs={6} sm={3} spacing={3}>
							<List>
								<Typography variant="subtitle1">Community</Typography>
								<ListItem button key="Facebook">
									<Typography variant="body2">
										<Link color="inherit" href="https://www.facebook.com/llresearch/" target="_blank" rel="noopener noreferrer">
											Facebook
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Twitter">
									<Typography variant="body2">
										<Link color="inherit" href="https://twitter.com/ll_research" target="_blank" rel="noopener noreferrer">
											Twitter
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Youtube">
									<Typography variant="body2">
										<Link
											color="inherit"
											href="https://www.youtube.com/user/LLResearch101"
											target="_blank"
											rel="noopener noreferrer"
										>
											Youtube
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Instagram">
									<Typography variant="body2">
										<Link
											color="inherit"
											href="https://www.instagram.com/the_law_of_one/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Instagram
										</Link>
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid container item xs={6} sm={3} spacing={3}>
							<List>
								<Typography variant="subtitle1">Contact</Typography>
								<ListItem button key="Contact">
									<Typography variant="body2">
										<Link color="inherit" href="/contact">
											Contact Us
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Privacy Policy">
									<Typography variant="body2">
										<Link color="inherit" href="/privacy">
											Privacy Policy
										</Link>
									</Typography>
								</ListItem>
								<ListItem button key="Login">
									<Typography variant="body2">
										<Link color="inherit" href="/login">
											Login
										</Link>
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid container item xs={6} sm={3} spacing={3}>
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
							<Link color="inherit" href="https://www.llresearch.org/" target="_blank" rel="noopener noreferrer">
								L/L Research. All Rights Reserved
								{"."}
							</Link>
						</Typography>
					</Container>
				</footer>
			</Container>
		</div>
	);
}
