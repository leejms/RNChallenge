import { StyleSheet } from 'react-native'

// Color palette
export const colors = {
	white: "#ffffff",
	black: "#000000",
	greyish: "#a5a5a5",
	deepSkyBlue: "#0080ff"
}

// Text styles
// TODO: import Roboto and use it
export const textStyles = StyleSheet.create({
	titleText: {
		fontFamily: "Arial",
		fontSize: 16,
        color: colors.black,
        fontWeight: 'bold'
	},
	subtitleText: {
		fontFamily: "Arial",
		fontSize: 17,
		color: colors.greyish
	},
	buttonText: {
		fontFamily: "Arial",
		fontSize: 4.7,
		lineHeight: 4.67,
		color: colors.white
	}
})