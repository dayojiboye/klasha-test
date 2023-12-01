import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	breakpoints: ["", "640px", "768px", "1024px", "1280px", "1536px"],
	colors: {
		white: "#fff",
		black: "#000",
		primary: "#1A1A1A",
		pink: "#EF2C5A",
		secondary: "#0A0A0A",
		navBg: "#FFFBF7",
	},
	fonts: {
		body: "Inter",
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: "none",
				padding: "8px 10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				transition: "none",
				height: "40px",
				fontSize: "12px",
				width: "auto",
				border: "none",
				outlineOffset: 0,
				gap: "15px",

				"&:disabled": {
					cursor: "not-allowed",
				},
			},
			variants: {
				primary: {
					color: "white",
					bg: "pink",
					borderRadius: "39px",
					fontWeight: "600",

					"&:hover": {
						bg: "pink !important",
					},
				},
				outline: {
					color: "secondary",
					bg: "transparent",
					borderRadius: "8px",
					gap: "8px",
					padding: "12px 20px",
					fontWeight: "600",
					border: "1px solid #0A0A0A !important",

					"&:hover": {
						bg: "transparent !important",
					},
				},
				secondary: {
					bg: "secondary",
					padding: "14px 24px",
					color: "white",
					fontWeight: "600",
					borderRadius: "8px",
					fontSize: "14px",
					height: "48px",

					"&:hover": {
						bg: "secondary !important",
					},
				},
			},
			defaultProps: {
				size: null,
			},
		},
		Heading: {
			baseStyle: {
				fontWeight: "unset",
			},
		},
	},
});

export default theme;
