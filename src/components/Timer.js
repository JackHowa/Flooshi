import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const Timer = (props) => (
	<Text style={styles.textStyle}>
		{props.timeRemaining}
	</Text>
);

const { width, height } = Dimensions.get('window');

const calcFontSize = width * 0.25;
const styles = StyleSheet.create({
  container: {
		flex: 1,
	},
	textStyle: {
		fontSize: calcFontSize,
		color: "#fafafa",
	},
	primaryColor: {
		backgroundColor: "#5856d6",
	},
	mainBackgroundColor: {
		backgroundColor: "#fafafa",
	}
});


export default Timer;