import React from 'react';
import { Button, Modal, StyleSheet, View, TouchableHighlight } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class AddressList extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      modal: false,
      address: '',
      popoverOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.createAddresses = this.createAddresses.bind(this);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleAddressState(address) {
    this.setState({address: address});
    this.toggleModal();
  }

  toggleModal(address) {
    this.setState({modal: !this.state.modal});
  }

  createAddresses(address) {
    return (
      <View key={address.key}>
          <Card>
            <TouchableHighlight
              onPress={() => this.handleAddressState(address.key)}
            >
              <CardItem header bordered>
                <Text>{address.key}</Text>
              </CardItem>
            </TouchableHighlight>
            <Text style={{
                    textAlign: "center"
                  }}
            >
              {address.cryptoAmount !== "" ? this.props.cryptoSym.toUpperCase() +
                ": " + address.cryptoAmount : address.cryptoAmount}
            </Text>
            <Text style={{
                    textAlign: "center"
                  }}
            >
              {address.fiatAmount !== "" ? this.props.fiatSym.toUpperCase() +
                ": " + address.fiatAmount.toFixed(2) : address.fiatAmount}
            </Text>
            <TouchableHighlight
              onPress={() => this.delete(address.key)}
            >
              <CardItem footer bordered>
                <Text style={{
                        color: "red"
                      }}
              >
                Delete
              </Text>
              </CardItem>
            </TouchableHighlight>
          </Card>
      </View>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let addressEntries = this.props.entries;
    let listAddresses = addressEntries.map(this.createAddresses);
    let address = this.state.address;

    return (
        <Content>
          <Modal animationType = {"slide"} transparent = {false}
             visible = {this.state.modal}
             onRequestClose = {() => { this.toggleModal() } }
          >
             <View>
                <Text>{address}</Text>
                <QRCode
                  value={address}
                  size={200}
                  bgColor='black'
                  fgColor='white'
                />
                <TouchableHighlight onPress = {() => {
                   this.toggleModal()}}
                >
                  <Text>Close Modal</Text>
                </TouchableHighlight>
             </View>
          </Modal>
          {listAddresses}
        </Content>
    );
  }
}


const styles = StyleSheet.create({
    submit:{
    marginRight:40,
    marginLeft:0,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#b3b3ff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'black',
      textAlign:'center',
      fontSize: 20
  },
  buttonDelete:{
      backgroundColor:'red',
      borderRadius: 14,
      width: 100,
      height: 30
  }
});
