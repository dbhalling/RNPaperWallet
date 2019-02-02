import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


var WAValidator = require('./wav');

const cryptoArray = [['1337ipJbP7U9mi9cdLngL3g5Napum7tWzM', 'BTC'], ['3CMCRgEm8HVz3DrWaCCid3vAANE42jcEv9', 'BTC'],
  ['bc1qa5kp7y9dns8m074433utts0j0r0lwpa3myhupz', 'BTC'], ['LWcXUB6ny88tK49TK1V6KprE5oDcJ1zJhx', 'LTC'],
  ['1GDLQvcZY8TS56gf6X8Hm94B8wRkbtV438', 'BCH'], ['0x94483b123b422d2Ab61fC459118667513956144E', 'ETH'],
  ['DND5TbT834xsjBre1c6pREJYWMDWKAL1rc', 'DOGE'], ['XckPoTubxQ8PbY9VAYCnSZarpsq6BFNUHA', 'DASH'],
  ['t1d29PNHtTJHHE4jMeLJFrmRcHJNhyYxZZC', 'ZEC']];
console.log('crytoArray', cryptoArray[1][0])

cryptoArray.forEach(function(element) {
  var valid = WAValidator.validate(element[0], element[1]);
  if(valid)
  	console.log('This is a valid address', element[0]);
  else
  	console.log('Address INVALID');
});

export default class App extends React.Component {
  state = {}
  constructor(props){
    super();
  }
  
  
  componentDidMount() {
    this.bitcoinBalance();
  }
  
  
  async bitcoinBalance(){
    const address = '1337ipJbP7U9mi9cdLngL3g5Napum7tWzM';
    let url = ('https://api.blockchair.com/bitcoin/dashboards/address/' 
    + '1337ipJbP7U9mi9cdLngL3g5Napum7tWzM');
    let response = await fetch(url);
    let body = await response.json();
    //this.setState({body});
    // let { AlertIOS } = require('react-native');
    console.log('balance', body.data[address].address.balance);
    //console.log(this.state.body);
  } 
  
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text></Text>
        <Text>Wallet Address Validator is Working!</Text>
        <Text>{cryptoArray[0][1]} Address</Text>
        <Text>{cryptoArray[0][0]}</Text>
        <Text>{WAValidator.validate(cryptoArray[0][0], cryptoArray[0][1])? 'is a valid address': 'is an invalid address'}</Text>
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
