import React, {Component} from 'react'
import { StyleSheet, ScrollView, RefreshControlm, View } from 'react-native'
import PropTypes from 'prop-types'
import Login from '../Mine/Login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  Login: {
    marginTop: 10
  }
})
export default class UserScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const { navigation } = this.props
    return (
      <View
        style={styles.container}>
        <Login navigation={navigation} style={styles.Login} />
      </View>
    )
  }
}
