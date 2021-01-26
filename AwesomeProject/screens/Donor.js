import React from 'react';
import { useState } from 'react';


import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, Item, Input, Toast } from 'native-base';






const Donor = ({navigation}) => {
    
    return (
        <ScrollView style={styles.main}>
            <View style={styles.one} >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Text style={{margin:20, fontSize:16}} >Note: Enter the data carefully. Once you submit, it cannot be changed</Text>
                <Item style={{flex:1,marginBottom:20, marginRight:20, marginLeft:20, }} rounded>
                    <Input textAlign={'center'} placeholder='Enter Full Name' />    
                </Item>
                <Item style={{flex:1, marginBottom:20, marginRight:20, marginLeft:20, }} rounded>
                    <Input textAlign={'center'} placeholder='Enter Blood Group' />
                </Item>
                <Item style={{flex:1, marginBottom:20, marginRight:20, marginLeft:20, }} rounded>
                    <Input textAlign={'center'} placeholder='Enter Mobile No.' />
                </Item>
                <Button onPress={() => navigation.navigate('User')} primary style = {{padding: '10%', alignSelf: 'center'}}> 
                <Text style={{color:'white'}}>Submit</Text>
                </Button>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    one: {
        alignItems: 'center',
        flex: 1,
        fontSize: 42,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        resizeMode: 'contain',
        height: 90,
        width: 90,
    },
});

export default Donor;
