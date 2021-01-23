import { Fragment, FC } from "react";

import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from "@material-ui/core";

import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import GroupIcon from "@material-ui/icons/Group";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import CreateIcon from "@material-ui/icons/Create";
import PublicIcon from "@material-ui/icons/Public";
import LinkIcon from "@material-ui/icons/Link";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: "flex",
			alignItems: "center",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: "flex-start",
		},
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

interface Props {
	open: boolean;
	setOpen: Function;
}

const DrawerLeft: FC<Props> = ({ open, setOpen }) => {
	const theme = useTheme();
	const classes = useStyles();

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
				</div>
				<List>
					<ListItem button key="Seeker Connector">
						<ListItemIcon>
							<GroupIcon />
						</ListItemIcon>
						<ListItemText primary="Seeker Connector" />
					</ListItem>
					<ListItem button key="Subscriptions">
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary="Subscriptions" />
					</ListItem>
					<ListItem button key="Events">
						<ListItemIcon>
							<EventIcon />
						</ListItemIcon>
						<ListItemText primary="Events" />
					</ListItem>
					<ListItem button key="Volutunteer/Donate">
						<ListItemIcon>
							<FavoriteIcon />
						</ListItemIcon>
						<ListItemText primary="Volutunteer/Donate" />
					</ListItem>
					<ListItem button key="Podcast">
						<ListItemIcon>
							<SettingsVoiceIcon />
						</ListItemIcon>
						<ListItemText primary="Podcast" />
					</ListItem>
					<ListItem button key="Carla's Niche">
						<ListItemIcon>
							<CreateIcon />
						</ListItemIcon>
						<ListItemText primary="Carla's Niche" />
					</ListItem>
					<ListItem button key="Gaia Meditation">
						<ListItemIcon>
							<PublicIcon />
						</ListItemIcon>
						<ListItemText primary="Gaia Meditation" />
					</ListItem>
					<ListItem button key="Linkshare">
						<ListItemIcon>
							<LinkIcon />
						</ListItemIcon>
						<ListItemText primary="Linkshare" />
					</ListItem>
				</List>
			</Drawer>
		</Fragment>
	);
};

export default DrawerLeft;
