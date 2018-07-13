import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

const Timer = (props) => <View style={{backgroundColor: "black", opacity: props.timeRemaining}} />;

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