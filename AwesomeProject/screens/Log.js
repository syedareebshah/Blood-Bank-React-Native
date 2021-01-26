import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button, } from "native-base";





const Log = ({navigation}) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Button onPress={() => navigation.navigate('Home')} style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}>Login With Facebook</Text>
        </Button>

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
