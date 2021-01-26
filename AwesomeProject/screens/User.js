import React from 'react';
import { useState } from 'react';


import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, Toast } from 'native-base';






const User = () => {

    return (
        <ScrollView style={styles.main}>
            <View style={styles.one} >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Text style={{ color: 'red', marginBottom: 10, marginTop: 10, fontWeight: 'bold', fontSize: 26, }}>Profile</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.heading}>Logged in as:</Text>
                    <Text style={styles.txt}>Jhon Doe</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.heading}>Full Name: </Text>
                    <Text style={styles.txt}>Jhon Doe Qureshi</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.heading}>Blood Group: </Text>
                    <Text style={styles.txt}>O+</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={styles.heading}>Mobile No: </Text>
                    <Text style={styles.txt}>+92 3123456789</Text>
                </View>
                <Button onPress={() => Toast.show({
                    text: 'Edit Functionality will be available soon.',
                    buttonText: 'Okay',
                   
                })} primary style={{ padding: '10%', alignSelf: 'center' }}>
                    <Text style={{ color: 'white', }}>Edit Profile</Text>
                </Button>
                
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    txt: {
        marginRight: 10,
        flex: 1,
        color: 'black',
        fontSize: 24,
    },
    heading: {
        marginLeft: 10,
        flex: 1,
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
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

export default User;
