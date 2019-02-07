import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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
        <Text>{address.key + ': '}</Text>
        <Text>{address.cryptoAmount + ': '}</Text>
        <Text>{address.fiatAmount !== "" ? '$' + address.fiatAmount.toFixed(2) : address.fiatAmount}</Text>
        <Button title="remove" color="#841584" onPress={() => this.delete(address.key)} /> 
      </View>
    );
  }
  // <tr key={address.key}>
  //       <td onClick={() => this.handleAddressState(address.key)}>
  //         {address.key}
  //       </td>
  //       <td>
  //         {address.cryptoAmount}
  //       </td>
  //       <td>
  //         {address.fiatAmount !== '' ? '$' + address.fiatAmount.toFixed(2) : address.fiatAmount}
  //       </td>
  //       <td>
  //         <Button size="sm" color="danger" onClick={() => this.delete(address.key)}>remove</Button> 
  //       </td>
  //     </tr>

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let addressEntries = this.props.entries;
    let listAddresses = addressEntries.map(this.createAddresses);
    let address = this.state.address;
    console.log('address', addressEntries[0]);
    console.log('state', this.state);

    return (
        <View>
          {listAddresses}
        </View>
    );
    // <tbody className="theList">
    //     <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
    //       <ModalHeader toggle={this.toggleModal}>
    //         <div onClick={this.toggle}>
    //           <Clipboard text={address}>
    //             <div>
    //               {address}
    //             </div>
    //             <div className="text-center">
    //               <FontAwesomeIcon icon="copy" id="PopoverAddress" />
    //             </div>
    //           </Clipboard>
    //         </div>
    //         <Popover className="popoverAddress" placement="bottom" isOpen={this.state.popoverOpen}
    //                     target="PopoverAddress" toggle={this.toggle}
    //                     boundariesElement=".alert-copy-clipboard"
    //             >
    //               <Alert color="warning" className="alert-copy-clipboard">
    //                 Copied to Clipboard
    //               </Alert>
    //         </Popover>
    //       </ModalHeader>
    //       <ModalBody className="text-center">
    //         <QRCode value={address} level="H" className="qrcode-canvas" />
    //       </ModalBody>
    //     </Modal>
        
    //     {listAddresses}
    //   </tbody>
  }
}