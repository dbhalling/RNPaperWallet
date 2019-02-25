import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import CryptoDropdown from "./CryptoDropdown";
import FiatDropdown from "./FiatDropdown";

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btc: "1337ipJbP7U9mi9cdLngL3g5Napum7tWzM",
      eth: "0x94483b123b422d2Ab61fC459118667513956144E",
      bch: "1GDLQvcZY8TS56gf6X8Hm94B8wRkbtV438",
      ltc: "LWcXUB6ny88tK49TK1V6KprE5oDcJ1zJhx",
      ppc: "PMWKyz4Sr8nKZnjABsWKnxJHCnjKo4garm",
      doge: "DND5TbT834xsjBre1c6pREJYWMDWKAL1rc",
      nmc: "NKX2XRAnucmc8RBTV9oZo8kgx7NP6K52JV",
      etc: "Ethereum Classic Paper Wallet Checker!",
      vtc: "VhuhgKpVwgqyuNCsJpEjcWxxKyP9rm9Aod",
      dash: "XckPoTubxQ8PbY9VAYCnSZarpsq6BFNUHA",
      btg: "GMbBJi6x6osdKnCnQUZqUWgD3fGztzik1h",
      neo: "Neo Paper Wallet Checker!",
      gas: "Neo Gas Paper Wallet Checker!",
      qtum: "Qtum Paper Wallet Checker!",
      kmd: "Komodo Paper Wallet Checker!",
      btcz: "Bitcoinz Paper Wallet Checker!",
      zen: "Zen Paper Wallet Checker!",
      zec: "t1d29PNHtTJHHE4jMeLJFrmRcHJNhyYxZZC",
      zcl: "ZClassic Paper Wallet Checker!",
      dcr: "Decred Paper Wallet Checker!",
      dgb: "DKkftwDYUQpMZCcDmcgtbLnCk5sf1qV9Hi",

      loading: true
      // popoverOpen: false,
      // popoverOpenAd: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAd = this.toggleAd.bind(this);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({loading: false});
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  toggleAd() {
    this.setState({
      popoverOpenAd: !this.state.popoverOpenAd
    });
  }

  render(){
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    const cryptoSym = this.props.cryptoSym;
    const fiatPrice = this.props.fiatPrice;
    const cryptoFiatRate = (
      <Text style={{textAlign: "center"}}>
        {`Current ${this.props.cryptoSym.toUpperCase()} / ` +
          `${this.props.fiatSym.toUpperCase()} : ${fiatPrice ? fiatPrice.toFixed(2) : ""}`
        }
      </Text>
    );

    return (
        <Container
          style={{
            // height: 'auto',
            flex: 1/3,
            border: "solid",
            borderColor: "black",
            borderWidth: 2
          }}
        >
          <Header>
            <Left style={{flex: .9}} />
            <Body style={{flex: 3}}>
              <Title style={{
                      // fontSize: 30,
                      // fontWeight: '500',
                      // textAlign: "center"
                    }}
              >
                Paper Wallet Checker!
              </Title>
            </Body>
            <Right style={{flex: .5}}/>
          </Header>
          <Container style={{
            flexDirection: "row",
            // justifyContent: "space-between"
          }}
          >
            <CryptoDropdown
              handleCryptoSymId={this.props.handleCryptoSymId}
              handleCheckBalanceState={this.props.handleCheckBalanceState}
            />
            <FiatDropdown
              handleFiatSym={this.props.handleFiatSym}
            />
          </Container>
          {this.props.checkBalanceState === 'checked' ? cryptoFiatRate : <Text/>}
        </Container>
    );
  }
}
