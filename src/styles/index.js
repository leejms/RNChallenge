/**
 * Root StyleGuide
 * 
 * define application scoped style constants like app colors and 
 * text styles
 */

import { StyleSheet } from 'react-native'

// Color palette
export const colors = {
	white: "#ffffff",
	black: "#000000",
	greyish: "#a5a5a5",
	deepSkyBlue: "#0080ff",
	lightGrey: "#F5F5F5"
}

// Text styles
export const textStyles = StyleSheet.create({
	titleText: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
    color: colors.black,
    fontWeight: 'bold'
	},
	subtitleText: {
		fontFamily: "Roboto-Regular",
		fontSize: 14,
		color: colors.greyish
	},
	buttonText: {
		fontFamily: "Roboto-Regular",
		fontSize: 4.7,
		lineHeight: 4.67,
		color: colors.white
	}
})