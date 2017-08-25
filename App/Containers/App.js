import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import * as firebase from "firebase";

// create our store
const store = createStore()


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNeVXNwwn21u2Rfoevif3-R0zor4qkl90",
  authDomain: "friendsmarkers-7fb19.firebaseapp.com",
  databaseURL: "https://friendsmarkers-7fb19.firebaseio.com",
  storageBucket: "friendsmarkers-7fb19.appspot.com",
  messagingSenderId: "114090560885"
};
firebase.initializeApp(config);
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
