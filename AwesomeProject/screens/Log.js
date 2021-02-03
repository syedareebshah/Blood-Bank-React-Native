import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import onPress from './Location'
import { LoginManager, AccessToken } from "react-native-fbsdk";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button, Input, Item } from "native-base";
import Geolocation from '@react-native-community/geolocation';




  
  

  let Log = ({ navigation }) => {
    
function jpg(){
  console.log(".....")
}


    onPress()
    function login() {
      navigation.navigate('Home')
      console.log("login")
      Geolocation.getCurrentPosition(info => console.log(info));
    }

    const fbLoging = async () => {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
  
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
  
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
      // Sign-in the user with the credential
      let userLogin = auth().signInWithCredential(facebookCredential)
      .then((user)=>{
        console.log("ok")
        login()
      })
      .catch((err)=>{
        alert("Something went wrong")
      })
    }





  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>

        <Image style={styles.logo} source={require('./assets/logo.png')} />

        {/* <Item style={{ margin: 10 }} rounded>
          <Input placeholder='Enter Email' />
        </Item>
        <Item style={{ margin: 10 }} rounded>
          <Input placeholder='Enter Password' />
        </Item> */}

        <Button onPress={() => fbLoging()} style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}>Login With Facebook </Text>
        </Button>

        {/* <Text style={{ color: 'black', fontSize: 20 }}> Don't have account? Sign Up </Text>

        <Button onPress={() => navigation.navigate('Sinup')} style={{ margin: 5, width: '40%', alignSelf: 'center' }} block>
          <Text style={{ color: 'white', }}>Sign up </Text>
        </Button> */}


      </View>

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  one: {
    paddingTop: 70,
    alignItems: 'center',
    flex: 1,
    fontSize: 42,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Log;
