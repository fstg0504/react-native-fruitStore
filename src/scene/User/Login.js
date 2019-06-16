import React, { Component } from 'react'
import { View, Text, TextInput, Image, StyleSheet, Alert } from 'react-native'
import Btn from '../../Component/Btn'

export default class Login extends Component {
  constructor(props) {
    super(props)
    alert(`${JSON.stringify(props)}fuck`)
    this.state = {
      username: '',
      possword: ''
    }
  }

  handleLogoin(e) {
    Alert.alert(
      '登录',
      '请求发送中...',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  goRegister(props) {
    // const { navigate } = props.navigation
    // alert(JSON.stringify(props))
    // alert(JSON.stringify(navigate))
    // navigator.push({ name: 'Register' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>登录</Text>
        <Image source={require('../../img/smile.png')} style={styles.img} />
        <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder='Username'
        />
        <TextInput
          style={styles.input}
          onChangeText={(possword) => this.setState({ possword })}
          value={this.state.possword}
          placeholder='Password'
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Btn
            text='Login'
            onPress={this.handleLogoin}
            style={styles.mybtn}
            size={20}
          />
        </View>
        {/* <Text style={[styles.text, styles.f1]} onPress={() => navigate('Register', { name: '注册' })}>没有有账号，去注册</Text> */}
        <Text style={[styles.text, styles.f1]} onPress={this.goRegister(this.props)}>没有有账号，去注册2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 300
  },
  img: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 8
  },
  input: {
    alignSelf: 'center',
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'left',
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    color: '#000000'
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#000000'
  },
  mybtn: {
    // alignSelf: 'center',
    borderRadius: 4,
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4',
  },
  link: {
    color: 'blue',
    marginTop: 20
  }
})
