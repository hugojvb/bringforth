import { Fragment, FC } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	})
);

const Home: FC = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<h1>hello</h1>
			</main>
		</Fragment>
	);
};

export default Home;
