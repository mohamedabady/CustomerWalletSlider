import React, { Component } from 'react'
import { Text, View } from 'react-native'

import WalletScreen from './SRC/Screens/WalletScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        <WalletScreen/>
      </View>
    )
  }
}