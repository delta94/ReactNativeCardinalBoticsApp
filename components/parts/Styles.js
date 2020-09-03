import {StyleSheet} from "react-native";
import config from "../../config.json";

const styles = StyleSheet.create({
	masterContainer: {
		flex: 1
	},
	drawerHeading: {
		width: "100%",
		height: "20%",
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	drawerLogo: {
		width: "40%",
		height: "50%",
		maxHeight: "50%",
		borderRadius: 15
	},
	drawerText: {
		fontSize: 18,
		color: "#FFF",
		textAlign: "left",
		marginHorizontal: 15
	},
	drawerTimeIn: {
		fontSize: 16,
		color: "#FFF",
		textAlign: "left",
		marginHorizontal: 15
	},
	screen: {
		width: "100%",
		height: "100%",
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 50,
		backgroundColor: config.colors.background,

	},
	largeLogoImage: {
		width: "100%",
		maxHeight: "25%",
		marginVertical: 30
	},
	signInButton: {
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		backgroundColor: config.colors.gray,
		width: "70%",
		padding: "5%",
		marginVertical: 50,
	},
	signInText: {
		fontSize: 30
	},
	whatchuDoing: {
		color: "#7D1120",
		marginTop: 20,
	},
	content: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	watchuDoing: {
		maxHeight: 30
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12,
	},
	formScreen: {
		paddingVertical: '10%',
		backgroundColor: config.colors.background,
		height:'100%',
	},
	formButton: {
		width: "100%",
		height: 40,
		flex: 1,
		justifyContent:'space-between',
		flexDirection: 'row',
		paddingHorizontal: 30,
		marginVertical: 10
	},
	formBtn: {
		width:30
	},
	leaderboardScreen: {
		paddingVertical: '18%',
		backgroundColor: "#FFFFFF"
	},
	memberEntry: {
		width: "100%",
		height: 40,
		flex: 1,
		paddingHorizontal: 30,
	},
	calendarScreen: {
		paddingVertical: '10%',
		marginTop: 40,
		height: "100%",
		backgroundColor: config.colors.background,
	},
	calendarView: {
		minHeight: "45%"
	},
	scroll: {
		maxHeight: "55%",
		padding: 15
	},
	text: {
		padding: 10,
		fontSize: 20,
		width: "100%",
		flex: 1,
		textAlign: 'center',
		alignSelf: "center"
	},
	resourceScreen: {
		paddingVertical: '10%',
		backgroundColor: config.colors.background,
	},
	resourceButton: {
		width: "100%",
		height: 40,
		flex: 1,
		paddingHorizontal: 30,
		marginVertical: 10
	}
});

export default styles;