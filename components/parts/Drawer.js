import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {Image, ScrollView, Text, View} from "react-native";
import {createAppContainer} from "react-navigation";
import {LinearGradient} from 'expo-linear-gradient';
import React from "react";

import config from "../../config.json";
import Styles from "./Styles.js";

// import Calendar from "../CalendarFragment";
import Leaderboard from "../Leaderboard";
import Resources from "../Resources";
import Forms from "../Forms";
import Login from "../Login";
import Home from "../Home";

import LeaderboardIcon from "../../images/volunteer.svg";
// import CalendarIcon from "../../images/calendar.svg";
import ResourcesIcon from "../../images/list.svg";
import LoginIcon from "../../images/login.svg";
import FormsIcon from "../../images/form.svg";
import HomeIcon from "../../images/home.svg";

const Drawer = createAppContainer(createDrawerNavigator({
	Home: {
		screen: props => (
			<Home
				login={props.screenProps.login}
				logout={props.screenProps.logout}
				getPassword={props.screenProps.getPassword}
				signedIn={props.screenProps.signedIn}
				sessions={props.screenProps.sessions}
			/>),
		navigationOptions: {
			drawerLabel: 'Home',
			drawerIcon: () => (
				<HomeIcon
					width={30}
					height={30}
					fill={config.colors.darkGray}
				/>
			)
		}
	},
	Login: {
		screen: props => (<Login setPassword={props.screenProps.setPassword} signedIn={props.screenProps.signedIn}/>),
		navigationOptions: {
			drawerLabel: 'Login',
			drawerIcon: () => (
				<LoginIcon
					width={30}
					height={30}
					fill={config.colors.darkGray}
				/>
			)
		}
	},
	Leaderboard: {
		screen: props => (<Leaderboard leaderboardData={props.screenProps.leaderboardData}/>),
		navigationOptions: {
			drawerLabel: 'Other Members',
			drawerIcon: () => (
				<LeaderboardIcon
					width={30}
					height={30}
					fill={config.colors.darkGray}
				/>
			)
		}
	},
	// Calendar: {
	// 	screen: Calendar,
	// 	navigationOptions: {
	// 		drawerLabel: 'Calendar',
	// 		drawerIcon: () => (
	// 			<CalendarIcon
	// 				width={30}
	// 				height={30}
	// 				fill={config.colors.darkGray}
	// 			/>
	// 		)
	// 	}
	// },
	Resources: {
		screen: Resources,
		navigationOptions: {
			drawerLabel: 'Resources',
			drawerIcon: () => (
				<ResourcesIcon
					width={30}
					height={30}
					fill={config.colors.darkGray}
				/>
			)
		}
	},
	Forms: {
		screen: Forms,
		navigationOptions: {
			drawerLabel: 'Forms',
			drawerIcon: () => (
				<FormsIcon
					width={30}
					height={30}
					fill={config.colors.darkGray}
				/>
			)
		}
	},

}, {
	contentComponent: (props) => {
		let timeInText = "No Ongoing Session Active";
		let timeInSecs = props.screenProps.timeIn;
		// let pad = val => val < 10 ? "0" + val : val;
		if (props.screenProps.signedIn) {
			let hoursInNumber = Math.floor(timeInSecs / 3600);
			let minutes = Math.floor(timeInSecs % 3600 / 60);
			let seconds = Math.floor(timeInSecs % 60);

			let hours = `${hoursInNumber} hour${hoursInNumber !== 1 ? "s" : ""}`;
			minutes = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
			seconds = `${seconds} second${seconds !== 1 ? "s" : ""}`;
			// minutes = `${pad(minutes)} minute${minutes !== 1 ? "s" : ""}`;
			// seconds = `${pad(seconds)} second${seconds !== 1 ? "s" : ""}`;

			timeInText = `Signed In for: \n${hours} ${minutes} ${seconds}`;
			if (hoursInNumber > 254) {
				timeInText = 'Loading...';
			}
		}

		return (
			<View style={Styles.masterContainer}>
				<LinearGradient
					colors={["#7D1120", "#A6242F", "#FF4D4D"]}
					start={[0, 0]}
					end={[1, 1]}
					style={Styles.drawerHeading}>
					<Image source={require("../../assets/favicon.png")}
						resizeMode="contain"
						style={Styles.drawerLogo}/>
					<View>
						<Text style={Styles.drawerText}>
							{props.screenProps.userText ? `Logged in as ${props.screenProps.userText}` : "Not Logged In"}
						</Text>
						<Text style={Styles.drawerTimeIn}>
							{timeInText}
						</Text>
					</View>
				</LinearGradient>
				<ScrollView>
					<DrawerItems {...props} />
				</ScrollView>
			</View>
		);
	}
}));

export default Drawer;