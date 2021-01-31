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






const User = ({route, navigation}) => {
    const data = route.params
    console.log("....",data)

    return (
        <ScrollView style={styles.main}>
            <View style={styles.one} >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Text style={{padding:20, color: 'yellow', marginBottom: 10, marginTop: 10, fontWeight: 'bold', fontSize: 26, marginLeft:10, marginRight:10, backgroundColor:'#5F6061',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>Thank you for becoming a part of this noble cause</Text>

                
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.heading}>Full Name: </Text>
                    <Text style={styles.txt}>{data.name}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.heading}>Blood Group: </Text>
                    <Text style={styles.txt}>{data.bloodGrop}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Text style={styles.heading}>Age: </Text>
                    <Text style={styles.txt}>{data.age}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={styles.heading}>Mobile No: </Text>
                    <Text style={styles.txt}>{data.phoneNo}</Text>
                </View>
                <Button onPress={() =>navigation.navigate('Home')}
                 primary style={{ padding: '10%', alignSelf: 'center', paddingBottom:20 }}>
                    <Text style={{ color: 'white', }}>Back to Home</Text>
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
        height: 120,
        width: 120,
    },
});

export default User;
