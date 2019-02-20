import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
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

      // popoverOpen: false,
      // popoverOpenAd: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAd = this.toggleAd.bind(this);
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
    const cryptoSym = this.props.cryptoSym;
    const fiatPrice = this.props.fiatPrice;
    const cryptoFiatRate = (
      <Text style={{textAlign: "center"}}>
        {`Current ${this.props.cryptoSym.toUpperCase()} / ` +
          `${this.props.fiatSym.toUpperCase()} : ${fiatPrice ? fiatPrice.toFixed(2) : ""}`
        }
      </Text>
    );
    // <h3 className="text-center" id="fiat-current-price">
    //     {`Current ${this.props.cryptoSym.toUpperCase()} /
    //     ${this.props.fiatSym.toUpperCase()} : ${fiatPrice ? fiatPrice.toFixed(2) : ""}`
    //     }
    //   </h3>


    return (
        <View
          style={{
            flex: 2/5,
            backgroundColor: "#99ffff",
            border: "solid",
            borderColor: "black",
            borderWidth: 2
          }}
        >
          <Text style={{
                  fontSize: 30,
                  fontWeight: '500',
                  textAlign: "center"
                }}
          >
            Paper Wallets Checker!
          </Text>
          <Text style={{textAlign: "center"}}>
            {this.state[cryptoSym]}
          </Text>
          <View style={{
            flexDirection: "row",
            // justifyContent: "space-between"
          }}
          >
            <View style={{
                    flex: 1,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 3
                  }}
            >
              <CryptoDropdown
                handleCryptoSymId={this.props.handleCryptoSymId}
                handleCheckBalanceState={this.props.handleCheckBalanceState}
              />
            </View>
            <View style={{
                    flex: 1,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 3
                  }}
            >
              <FiatDropdown
                handleFiatSym={this.props.handleFiatSym}
              />
            </View>
          </View>
          {this.props.checkBalanceState === 'checked' ? cryptoFiatRate : <Text/>}
        </View>
    );
  }
  // <div className="header row">
  //         <div className="qrcode col-2">
  //           <QRCode value={this.state[cryptoSym]} renderAs={"svg"} className={"qrcode-canvas"} level="H" />
  //         </div>
  //         <div className="col-10">
  //           <h1 className="donation-address" onClick={this.toggle}>
  //             <Clipboard text={this.state[cryptoSym]}>
  //               {this.state[cryptoSym]}
  //               {" "}
  //               <FontAwesomeIcon icon="copy" className="copy-icon"
  //                               id="PopoverAddressHeader"
  //               />
  //             </Clipboard>
  //             <Popover className="popoverAddress" placement="bottom" isOpen={this.state.popoverOpen}
  //                       target="PopoverAddressHeader" toggle={this.toggle}
  //                       boundariesElement=".alert-copy-clipboard"
  //               >
  //                 <Alert color="warning" className="alert-copy-clipboard">
  //                   Copied to Clipboard
  //                 </Alert>
  //             </Popover>
  //           </h1>
  //           <div className="col-10 text-center">
  //             <h3 className="slogan">Your Crypto Paper Wallet Checker !
  //               {" "}
  //               <CryptoDropdown
  //                 handleCryptoSymId={this.props.handleCryptoSymId}
  //                 handleCheckBalanceState={this.props.handleCheckBalanceState}
  //               />
  //               <FiatDropdown
  //                 handleFiatSym={this.props.handleFiatSym}
  //               />
  //             </h3>
  //             {this.props.checkBalanceState === 'checked' ? cryptoFiatRate : ''}
  //           </div>
  //           <Ad popoverOpenAd={this.state.popoverOpenAd} toggleAd={this.toggleAd}/>
  //         </div>
  //       </div>
}
