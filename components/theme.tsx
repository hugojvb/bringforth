import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#111",
		},
		secondary: {
			main: "#EEEEEE",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
	typography: {
		fontFamily: "Merriweather, Segoe UI, sans-serif, Arial",
	},
});

export default theme;
