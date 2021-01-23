import { Fragment, useState } from "react";

import { AppBar, Toolbar, IconButton, Typography, Tabs, Tab, makeStyles } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WebIcon from "@material-ui/icons/Web";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles({
	menu: {
		marginLeft: "auto",
	},
	tabs: {
		minWidth: "4vw",
		flexGrow: 1,
	},
	title: {
		marginLeft: "2vw",
	},
});

export default function Navbar() {
	const classes = useStyles();

	const [value, setValue] = useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Fragment>
			<AppBar position="sticky">
				<Toolbar>
					<IconButton aria-label="Menu" color="inherit">
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" display="block" className={classes.title}>
						Bring4th
					</Typography>
					<Tabs
						value={value}
						className={classes.menu}
						onChange={handleChange}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons="auto"
					>
						<Tab icon={<HomeIcon />} wrapped={true} className={classes.tabs} />
						<Tab icon={<ForumIcon />} className={classes.tabs} />
						<Tab icon={<WebIcon />} className={classes.tabs} />
						<Tab icon={<LibraryBooksIcon />} className={classes.tabs} />
						<Tab icon={<InfoIcon />} className={classes.tabs} />
						<Tab icon={<LocalGroceryStoreIcon />} className={classes.tabs} />
					</Tabs>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
}
