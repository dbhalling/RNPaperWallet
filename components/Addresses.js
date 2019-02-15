import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

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
        
        <TouchableHighlight
          style={styles.submit}
          onPress={() => this.delete(address.key)}
          underlayColor='#fff'>
            <Text style={styles.submitText}>Delete</Text>
        </TouchableHighlight>
      </View>
    );
  }
  
  
        // <Button 
        //   style={styles.buttonDelete}
        //   title="remove" 
        //   onPress={() => this.delete(address.key)} />
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


const styles = StyleSheet.create({
    buttonDelete: {
        color: 'orange',
        borderRadius: 14
    },
    submit:{
    marginRight:40,
    marginLeft:0,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'red',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'black',
      textAlign:'center',
      fontSize: 20
  }
});