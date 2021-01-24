import { useState, FC, Fragment } from "react";

import DrawerLeft from "./DrawerLeft";

import clsx from "clsx";

import Image from "next/image";

import { AppBar, Toolbar, IconButton, Typography, Tabs, Tab, makeStyles, createStyles, Theme, Tooltip } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menu: {
			marginLeft: "auto",
		},
		tabs: {
			minWidth: "5vw",
			flexGrow: 1,
		},
		title: {
			marginLeft: "5px",
		},
		appBar: {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: "none",
		},
	})
);

const Navbar: FC = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(0);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Fragment>
			<AppBar
				position="sticky"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<Tooltip title="Show sidebar" arrow>
						<IconButton
							aria-label="Menu"
							color="inherit"
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Tooltip>
					<Image src="/logo.png" height="50" width="50" />
					<Typography variant="h5" className={classes.title}>
						Bring4th
					</Typography>
					<Tabs value={value} className={classes.menu} onChange={handleChange} indicatorColor="secondary" textColor="inherit">
						<Tooltip title="Home" arrow>
							<Tab label="Home" wrapped={true} className={classes.tabs} />
						</Tooltip>
						<Tooltip title="Forums" arrow>
							<Tab label="Labels" className={classes.tabs} />
						</Tooltip>
						<Tooltip title="Blogs" arrow>
							<Tab label="Blogs" className={classes.tabs} />
						</Tooltip>
						<Tooltip title="Library" arrow>
							<Tab label="Library" className={classes.tabs} />
						</Tooltip>
						<Tooltip title="About Us" arrow>
							<Tab label="About Us" className={classes.tabs} />
						</Tooltip>
						<Tooltip title="Store" arrow>
							<Tab label="Store" className={classes.tabs} />
						</Tooltip>
					</Tabs>
				</Toolbar>
			</AppBar>
			<DrawerLeft open={open} setOpen={setOpen} />
		</Fragment>
	);
};

export default Navbar;
