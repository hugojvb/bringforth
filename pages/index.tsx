import { useEffect, FC } from "react";

import { makeStyles, Theme, createStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		text: {
			textAlign: "center",
			color: "#FFF",
			marginTop: "20vh",
		},
		container: { minHeight: "100vh" },
		fullWidth: { backgroundImage: `url("/sunset.png")` },
	})
);

const Home: FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.fullWidth}>
			<Container maxWidth="lg" className={classes.container}>
				<main className={classes.content}>
					<Typography variant="h4" className={classes.text}>
						Welcome to Bring4th
					</Typography>
					<Typography variant="body1" className={classes.text}>
						Bring4th, a double entendre suggesting bring forth your love and bring 4th density, is our newest companion site to accompany
						the L/L Research web site, www.llresearch.org. With Bring4th’s launch, LLResearch.org has become an archive web site, a
						virtual library that houses on its shelves the fruit of our life's work to share information regarding the Law of One. It is
						our intention that these intensive efforts to share information are helpful to the spiritual evolution of all. We will
						continue to update LLResearch.org with our bi-weekly public Saturday meditations, personal channelings, speeches, interviews,
						workshops, and other items of interest.
					</Typography>
				</main>
			</Container>
		</div>
	);
};

export default Home;
