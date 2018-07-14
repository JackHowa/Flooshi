import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OptionBar = (props) => (
	<View 
		style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
		>
		<TouchableOpacity onPress={props.onPressFunction}>
			<Icon 
			name={props.playing ? "ios-pause" : "ios-play"} color="black" size={115} />
		</TouchableOpacity>
	</View>
);

export default OptionBar;