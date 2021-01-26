import React from 'react';
import { useState } from 'react';


import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, Item, Input } from 'native-base';






const Home = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <ScrollView style={styles.main}>
            <View style={styles.one} >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Item style={{flex:1, marginLeft:20, marginRight:20,}} rounded>
                    <Input placeholder='Search Blood Group' />
                </Item>

                <Button onPress={() => navigation.navigate('Search')} style={{
                    justifyContent: 'center',
                    alignItems: 'center', flex: 1, margin: 20,
                }} rounded success>
            <Text style={{color:'white'}}>Search Blood</Text>
                </Button>

                <Button onPress={() => navigation.navigate('Donor')} style={{
                    justifyContent: 'center',
                    alignItems: 'center', flex: 1, margin: 20,
                }} rounded>
                    <Text style={{color:'white',}}>Register as a Donor!</Text>
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
        height: 150,
        width: 150,
    },
});

export default Home;
