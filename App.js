import React, { useState, useEffect, useRef } from 'react';
const text = 'Welcome to TapTapType';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Login from './screens/Login';
import Leaderboard from './screens/Leaderboard';
import PLayeroptions from './screens/Playeroptions';
import Statsscreen from './screens/statsscreen';
import Typescreen from './screens/Typescreen';
import Logo from './screens/Logo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import useGameLogic from './screens/useGameLogic';
function App() {
  const [
    textBoxRef,
    handleChange,
    text,
    timeRemaining,
    startGame,
    isTimeRunning,
    wordCount,
  ] = useGameLogic();
  return (
    // <div>
    //   <h1>How many words can you type in 30 seconds?</h1>
    //   <textarea
    //     ref={textBoxRef}
    //     onChange={handleChange}
    //     value={text}
    //     disabled={!isTimeRunning}
    //   />
    //   <h4>Time remaining: {timeRemaining}</h4>
    //   <button style={styles.button} onClick={startGame} disabled={isTimeRunning}>
    //     Start
    //   </button>
    //   <h1>Word count: {wordCount}</h1>
    // </div>

    <View style={styles.container}>
    <ImageBackground source= {require("./assets/Background.jpg")} style={styles.background}>
      <Text style={styles.heading}>How many words can you type in 30 seconds?</Text>
      <textarea
      style={styles.textArea}
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <Text style={styles.timeRemaining}>Time remaining: {timeRemaining}</Text>
      <TouchableOpacity style={styles.button} onPress={startGame} disabled={isTimeRunning}>
        Start
      </TouchableOpacity>
      <Text style={styles.wordCount}>Word count: {wordCount}</Text>
      </ImageBackground>
    </View>
  );
}

const styles=StyleSheet.create({
container:{
  flex:1,
},

button:{
  color: "black",
  fontSize: 25,
  alignItems: "center",
  backgroundColor: "white",
  width:55,
  height:29,
  borderRadius:15,
},

heading:{
  fontSize: 25,
  color:"white",
},

background:{
  flex:1,
  //resizeMode:'cover',
  width:"100%",
  height: "100%"
},

textArea:{
  width: "98.5%",
  height:100,
  backgroundColor: "white",
},

timeRemaining:{
  color:"white",
  fontSize: 22,
},

wordCount:{
  color:"#FF0009",
  fontSize: 22,
}



})

export default App;

// <View> <appContainer/> </View>

// var appNavigator = createSwitchNavigator({
//   Logo:Logo,
//   Login:Login,
//   Typescreen:Typescreen,
//   Statsscreen:Statsscreen,
//   PLayeroptions:PLayeroptions,
//   Leaderboard:Leaderboard
// })
// const appContainer = createAppContainer(appNavigator)
