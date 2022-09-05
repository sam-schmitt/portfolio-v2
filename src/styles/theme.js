import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: true,
};
const colors = {
	dark: {
		primary: "#305fe2",
		text: "#FCFCFC",
		secondaryText: "#cccccc",
		background: "#151515",
		foreground: "#222222",
		card: "#3B3B3B",
		danger: "#E74F4F",
		success: "#29ab45",
		link: "#5d96f1",
		accent1Dark: "#03A4E9",
		accent1Light: "#569CC830",
		accent2Dark: "#e44ea0",
		accent2Light: "#D14A9430",
		primaryDark: "#738cff",
		primaryLight: "#305fe230",
	},
	light: {
		primary: "#305fe2",
		text: "#000000",
		secondaryText: "#666666",
		background: "#FFFFFF",
		foreground: "#F0F0F0",
		card: "#FFFFFF",
		danger: "#F66363",
		success: "#29ab45",
		link: "#0645ad",
		accent1Dark: "#0085BE",
		accent1Light: "#77C8E250",
		accent2Dark: "#BC0063",
		accent2Light: "#E44EA050",
		primaryDark: "#0036af",
		primaryLight: "#305fe250",
	},
	blue: {
		50: "#305fe2",
		100: "#305fe2",
		200: "#305fe2",
		300: "#305fe2",
		400: "#305fe2",
		500: "#305fe2",
		600: "#305fe2",
		700: "#305fe2",
		800: "#305fe2",
		900: "#305fe2",
	},
};
const components = {
	Button: {
		baseStyle: {
			margin: 0.5,
			_hover: { opacity: "75%" },
			_focus: {
				boxShadow: "none",
			},
		},
		sizes: {
			xl: {
				h: "56px",
				fontSize: "lg",
				px: "32px",
			},
		},
		variants: {
			contained: (props) => ({
				color: "white",
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.primary }
					: { backgroundColor: colors.light.primary }),
				_hover: {
					_disabled: {
						opacity: 0.25,
						...(props.colorMode === "dark"
							? { backgroundColor: colors.dark.primary }
							: { backgroundColor: colors.light.primary }),
					},
				},
			}),
			primary: (props) => ({
				...(props.colorMode === "dark"
					? {
							color: colors.dark.primaryDark,
							backgroundColor: colors.dark.primaryLight,
					  }
					: {
							color: colors.light.primaryDark,
							backgroundColor: colors.light.primaryLight,
					  }),
			}),
			accent1: (props) => ({
				...(props.colorMode === "dark"
					? {
							color: colors.dark.accent1Dark,
							backgroundColor: colors.dark.accent1Light,
					  }
					: {
							color: colors.light.accent1Dark,
							backgroundColor: colors.light.accent1Light,
					  }),
			}),
			accent2: (props) => ({
				...(props.colorMode === "dark"
					? {
							color: colors.dark.accent2Dark,
							backgroundColor: colors.dark.accent2Light,
					  }
					: {
							color: colors.light.accent2Dark,
							backgroundColor: colors.light.accent2Light,
					  }),
			}),
			danger: (props) => ({
				color: "white",
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.danger }
					: { backgroundColor: colors.light.danger }),
			}),
			success: (props) => ({
				color: "white",
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.success }
					: { backgroundColor: colors.light.success }),
			}),
			outlined: (props) => ({
				borderWidth: 1,
				borderStyle: "solid",
				...(props.colorMode === "dark"
					? {
							borderColor: colors.dark.secondaryText,
							color: colors.dark.text,
							_hover: { backgroundColor: colors.dark.foreground },
					  }
					: {
							borderColor: colors.light.secondaryText,
							color: colors.light.text,
							_hover: { backgroundColor: colors.light.foreground },
					  }),
			}),
			text: (props) => ({
				...(props.colorMode === "dark"
					? { _hover: { backgroundColor: colors.dark.foreground } }
					: { _hover: { backgroundColor: colors.light.foreground } }),
			}),
			link: (props) => ({
				...(props.colorMode === "dark"
					? {
							color: colors.dark.link,
							_hover: { backgroundColor: colors.dark.foreground },
					  }
					: {
							color: colors.light.link,
							_hover: { backgroundColor: colors.light.foreground },
					  }),
			}),
			filled: (props) => ({
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.foreground }
					: { backgroundColor: colors.light.foreground }),
			}),
		},
		defaultProps: {
			variant: "contained",
		},
	},
	IconButton: {
		variant: {
			text: (props) => ({
				backgroundColor: "transparent",
			}),
		},
	},
	Tooltip: {
		baseStyle: (props) => ({
			borderRadius: 5,
			...(props.colorMode === "dark"
				? { backgroundColor: colors.dark.card, color: colors.dark.text }
				: {
						backgroundColor: colors.light.card,
						color: colors.light.text,
				  }),
		}),
	},
	Alert: {
		backgroundColor: "red",
		variants: {
			regular: (props) => ({
				// only applies to `subtle` variant
			}),
		},
	},
	Input: {
		baseStyle: {},
		variants: {
			filled: (props) => ({
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.card }
					: { backgroundColor: colors.light.card }),
			}),
		},
	},
	Popover: {
		// parts: ["portal", "header", "body"],
		variants: {
			primary: (props) => ({
				...(props.colorMode === "dark"
					? {
							backgroundColor: colors.dark.foreground,
					  }
					: {
							backgroundColor: colors.light.foreground,
					  }),
			}),
		},
	},
	Tag: {
		variants: {
			contained: (props) => ({
				color: "white",
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.primary }
					: { backgroundColor: colors.light.primary }),
			}),
			danger: (props) => ({
				color: "white",
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.danger }
					: { backgroundColor: colors.light.danger }),
			}),
			outlined: (props) => ({
				borderWidth: 1,
				borderStyle: "solid",
				...(props.colorMode === "dark"
					? {
							borderColor: colors.dark.secondaryText,
							color: colors.dark.text,
							_hover: { backgroundColor: colors.dark.foreground },
					  }
					: {
							borderColor: colors.light.secondaryText,
							color: colors.light.text,
							_hover: { backgroundColor: colors.light.foreground },
					  }),
			}),
			text: (props) => ({
				...(props.colorMode === "dark"
					? { _hover: { backgroundColor: colors.dark.foreground } }
					: { _hover: { backgroundColor: colors.light.foreground } }),
			}),
			filled: (props) => ({
				...(props.colorMode === "dark"
					? { backgroundColor: colors.dark.foreground }
					: { backgroundColor: colors.light.foreground }),
			}),
		},
	},
	Drawer: {
		parts: ["dialog", "header", "body"],
		variants: {
			primary: (props) => ({
				...(props.colorMode === "dark"
					? {
							dialog: {
								backgroundColor: colors.dark.foreground,
							},
					  }
					: {
							dialog: {
								backgroundColor: colors.light.foreground,
							},
					  }),
			}),
		},
	},
};
const styles = {
	global: (props) => ({
		body: {
			backgroundColor:
				props.colorMode === "dark"
					? colors.dark.background
					: colors.light.background,
			color: props.colorMode === "dark" ? colors.dark.text : colors.light.text,
		},
		a: {
			color:
				props.colorMode === "dark" ? colors.dark.primary : colors.light.primary,
		},
	}),
};
const chakraTheme = extendTheme({ components, colors, config, styles });
export default chakraTheme;
