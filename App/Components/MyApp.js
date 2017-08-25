import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { call, put } from 'redux-saga/effects'

import { connect } from 'react-redux'
import MarkersActions from '../Redux/MarkerRedux'

let styles

function MyApp(props) {
  const {
    container,
    text,
    button,
    buttonText
  } = styles

  console.log('MyApp | markers -> ', markers)
  let markers = props.getMarkers()
  console.log('MyApp | markers -> ', markers)
  

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight style={button} onPress={() => props.getMarkers} >
        <Text style={buttonText}>{JSON.stringify(props.markers)}</Text>
      </TouchableHighlight>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps(state) {
  return {
    markers: state.markers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMarkers: () => dispatch(MarkersActions.markersRequest())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp)