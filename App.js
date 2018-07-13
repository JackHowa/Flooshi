import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
	View,
	YellowBox
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Timer from './src/components/Timer';
import TextIndicator from './src/components/TextIndicator';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger is in a background tab which may cause apps to perform slowly',
])

export default class App extends Component {
	constructor() {
		super();
		this.state = {timeRemaining: 100}
	}

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      timeRemaining: this.state.timeRemaining - 1
		});
		console.log(this.state.timeRemaining)
  }

  render() {
    return (
				<SafeAreaView 
					style={
						[
							styles.safeArea,
						]
					}
				>
				<View 
					style={
						[
							{ 
								opacity: this.state.timeRemaining / 100,
							}, 
						styles.primaryColor,
						{
							flex: 1,
						}
						]
					}
				/>

				
					<TextIndicator />
				</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fafafa',
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
