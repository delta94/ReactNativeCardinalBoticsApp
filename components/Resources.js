import {FlatList, StyleSheet, Text, View} from 'react-native';
import LinkButton from "./parts/LinkButton.js";
import config from "../config.json";
import React from "react";
import Icon from "../images/list.svg";

export default class Resources extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Resources',
		drawerIcon: () => (
			<Icon
				width={30}
				height={30}
				fill={config.colors.secondary}
			/>
		)
	}

	constructor(props) {
		super(props);
		this.state = {
			linkPairs: [],
			isLoading: false
		};
	}

	componentDidMount() {
		fetch(config.urls.resources)
			.then((response) => response.json())
			.then((json) => {
				this.setState({data: json.values});
			})
			.catch((error) => console.error(error))
			.finally(() => {
				this.setState({isLoading: false});
			});
	}

	render() {
		return (
			<View>
				{this.state.isLoading ? <Text> Loading </Text> : (
					<FlatList
						data={this.state.data}
						keyExtractor={(item, index) => item[0] + ": " + item[1]}
						renderItem={(entry) => {
							entry = entry.item;
							return (
								<View style={styles.resourceButton}>
									<LinkButton
										title={entry[0]}
										url={entry[1]}
										icon={entry[2]}
									/>
								</View>
							);
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	resourceButton: {
		width: "100%",
		height: 40,
		flex: 1,
		paddingHorizontal: 30,
		marginVertical: 10
	},
});