import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
	View,
	YellowBox
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import timer from 'react-native-timer';

import Timer from './src/components/Timer';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger is in a background tab which may cause apps to perform slowly',
])

export default class App extends Component {
	constructor() {
		super();
		this.state = {timeRemaining: 60}
	}

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      timeRemaining: this.state.timeRemaining - 1
    });
  }

  render() {
    return (
			<SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeArea}>
				<View style={styles.container}>
					<View style={[styles.subContainer, styles.primaryColor]}>
						<Timer timeRemaining={this.state.timeRemaining} />
					</View>
					<View style={[styles.subContainer, styles.mainBackgroundColor]}>
						<Text>Yo</Text>
					</View>
				</View>
			</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#5856d6'
	},
  container: {
		flex: 1,
	},
	subContainer: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center'
	},
	primaryColor: {
		backgroundColor: "#5856d6",
	},
	mainBackgroundColor: {
		backgroundColor: "#fafafa",
	}
});
