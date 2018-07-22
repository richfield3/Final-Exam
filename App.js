import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableHighlight, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      email: '',
      password: '',
      showEErr: true,
      showPErr: true
    }
  }

  validateE(text){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(reg.test(text) === false)
    {
      this.setState({email:text,showEErr:false})
    }
    else 
    {
      this.setState({email:text,showEErr:true})
      
    }
  }
  validateP(text){
    let reg = text.length.toString();
    if(reg < 6 || reg > 12)
    {
      this.setState({password:text,showPErr:false})
    }
    else 
    {
      this.setState({password:text,showPErr:true})
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <Image source={require('./logo.png')} />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.center}>
        <Text style={styles.TxtDes}>Email</Text>
          <TextInput 
            onChangeText = {(text)=>this.validateE(text)}
            style={styles.box}
            placeholder="Input email address"
            value = {this.state.email}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
          />
          <Text style={[styles.CrctMsg, !this.state.showEErr? styles.ErrMsg:null]}>not correct format for email address</Text>
          <Text style={styles.TxtDes}>Password</Text>
          <TextInput 
            onChangeText = {(text)=>this.validateP(text)}
            style={styles.box}
            returnKeyType="go"
            underlineColorAndroid="transparent"
            secureTextEntry
            placeholder="Input password"/>
          <Text style={[styles.CrctMsg, !this.state.showPErr? styles.ErrMsg:null]}>please use at least 6 - 12 characters </Text>
        </View>
        <View style = {styles.bottom}>
          <TouchableHighlight style = {styles.buttonContainer}
            underlayColor = "#a771f7"
            onPress={() => {Alert.alert('Login Success!');}}
            disabled= {true,!this.state.showEErr || !this.state.showPErr || this.state.email === '' || this.state.password === ''? true: false}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    height: '30%',
    padding: 15
  },
  box: {
    paddingLeft:10,
    width: '100%',
    borderColor: '#8B49DD',
    borderWidth: 2,
    borderRadius:4,
    fontStyle:'italic',
  },
  TxtDes: {
    fontWeight: '200',
    fontSize: 24
  },
  CrctMsg: {
    color: 'transparent'
  },
  ErrMsg: {
    fontSize: 14,
    color: 'red',
    fontStyle: 'italic'
  },
  bottom: {
    height: '15%',
    padding: 15
  },
  buttonContainer: {
    backgroundColor: '#8B49DD',
    borderRadius: 4,
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 24
  }
});
