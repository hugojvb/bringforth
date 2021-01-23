import { Fragment, FC } from "react";

import { makeStyles, Theme, createStyles, Container, Paper, Typography } from "@material-ui/core";

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
	})
);

const Home: FC = () => {
	const classes = useStyles();

	return (
		<Container>
			<Paper elevation={3}>
				<main className={classes.content}>
					<Typography>Hello</Typography>
				</main>
			</Paper>
		</Container>
	);
};

export default Home;
