import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var WAValidator = require('./wav');

var valid = WAValidator.validate('1337ipJbP7U9mi9cdLngL3g5Napum7tWzM', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
