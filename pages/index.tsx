import { useEffect, useState, FC } from "react";

import { makeStyles, Theme, createStyles, Container, Typography, Paper, Button, Box, Grow, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		// content: {
		// 	flexGrow: 1,
		// 	padding: theme.spacing(8),
		// 	transition: theme.transitions.create("margin", {
		// 		easing: theme.transitions.easing.sharp,
		// 		duration: theme.transitions.duration.leavingScreen,
		// 	}),
		// 	background: `linear-gradient(170deg, rgba(250, 250, 220, 0.1), rgba(250, 250, 200, 0.6) )`,
		// 	marginTop: "10vh",
		// },
		title: {
			textAlign: "center",
			color: "#fff",
		},
		text: { textAlign: "left", color: "#fff", marginTop: "10vw", lineHeight: "2", fontSize: "3rem" },
		container: { minHeight: "94vh" },
		fullWidth: { backgroundImage: `url("/sunset.png")` },
		button: {},
	})
);

const Home: FC = () => {
	const classes = useStyles();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	});

	return (
		<div className={classes.fullWidth}>
			<Container maxWidth="md" className={classes.container}>
				<br />

				<Grow in={mounted}>
					<Typography className={classes.text}>Bring4th is the newest companion to the L/L Research archive.</Typography>
				</Grow>
				<br />
				<Box className={classes.button}>
					<Button variant="outlined" color="secondary" size="large">
						Learn More
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default Home;
