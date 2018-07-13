import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextIndicator = () => {
	return (
		<View style={[styles.container, {opacity: 1}]}>
			<View style={styles.subContainer}>

			</View>
			<View style={[styles.subContainer, styles.mainBackgroundColor, {opacity: 1}]}>
				<Text>Can you see me </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#5856d6',
	},
  container: {
		flex: 1,
	},
	subContainer: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center',

	},
	primaryColor: {
		backgroundColor: "#5856d6",
	},
	mainBackgroundColor: {
		backgroundColor: "#fafafa",
	}
});



export default TextIndicator;