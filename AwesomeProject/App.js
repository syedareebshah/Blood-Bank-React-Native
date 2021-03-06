/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
 import Navigation from './config/Navigation'
 import { Root } from "native-base";
 import store from './Store'
import { Provider } from "react-redux";



const App: () => React$Node = () => {
 
  
  return(
    <Provider store={store}>
      <Root>
      <Navigation />
      </Root>
      </Provider>
  
   
     
  )
  // return (
  //   <View style={{ flex: 1, backgroundColor:'gray' }} >

  //   <ScrollView style={{ flex: 1 }}>
  //     <Test />
  //     <Camera />
    
  //   <View style={{ flex: 4 }}>

  //     <TextInput
  //       style={{margin:30, height: 40,backgroundColor:'white', borderColor: 'grawy', borderWidth: 1 }}
  //       placeholder="enter text" onChangeText={text => onChangeText(text)}
  //       value={value}
  //     />
  //     <Button title="btn" onPress={() => { ali.push(value) }} />
  //     {ali.map((v, i) => {
  //       return (
  //         <Text key={i} style={styles.Text}>
  //           <Button title="Edit" onPress={() => {

  //           }} />
  //           {v}
  //           <Button title="Del" onPress={() => {
  //             console.log(ali[i])
  //             ali.splice(i, 1)
  //             console.log(ali)
  //           }} />
  //         </Text>
  //       )
  //     })}
  //     <View style={{ flex: 1 }}>


  //       <Button title="Dell All" onPress={() => { ali = [] }} />
  //       <Button title="haha" onPress={() => {
  //         ali.push("how")
  //       }} />
  //       <Button title="Add" onPress={() => {
  //         console.log("ali", ali)
  //       }} />
        

  //     </View>
  //   </View>
  //   </ScrollView>
  // </View>  
  // )


};

const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default App;
