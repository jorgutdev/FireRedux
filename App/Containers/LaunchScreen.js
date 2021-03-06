import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import MyApp from '../Components/MyApp'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

        <MyApp />

        </ScrollView>
      </View>
    )
  }
}
