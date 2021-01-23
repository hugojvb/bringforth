import { Fragment, FC } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

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
		<Fragment>
			<main className={classes.content}>
				<h1>hello</h1>
			</main>
		</Fragment>
	);
};

export default Home;
