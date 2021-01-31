import React from 'react';
import { useState , useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';


import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, } from 'native-base';







const Home = ({ navigation }) => {

    let [bloodGrop, setBloodGrop] = useState("A+")
    // let [selectedValue, setSelectedValue] = useState("A+")


    // console.log(bloodGrop)

    const SearchBlood = () => {
        let bg = bloodGrop.toLocaleUpperCase()
        console.log("====>",bg)
        if (bg == "A+" || bg == "A-" || bg == "B+" || bg == "B-" || bg == "O+" || bg == "O-" || bg == "AB+" || bg == "AB-") {
            console.log("mil gya", bg)
            navigation.navigate('Search', { bg: bg })
        }
        else {
            alert("Invalid Entry")
        }

    }

    // const SearchBlood = (selectedValue) => {
    //     console.log(selectedValue)

    // }

    

 

    return (
        <ScrollView style={styles.main}>



            <View style={styles.one} >
                



                
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                {/* <Item style={{ flex: 1, marginLeft: 20, marginRight: 20, }} rounded>
                    <Input value={bloodGrop} onChangeText={(Text) => setBloodGrop(Text)} placeholder='Search Blood Group' />
                </Item> */}
                <Picker

                    selectedValue={bloodGrop}
                    style={{ height: 50, width: '80%', borderWidth: 1, borderColor:'red' }}
                    onValueChange={(itemValue, itemIndex) => setBloodGrop(itemValue)}
                >
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="AB-" value="AB-" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="O-" /> 
                </Picker>

                <Button onPress={() => SearchBlood()} style={{
                    justifyContent: 'center',
                    alignItems: 'center', flex: 1, margin: 20,
                }} rounded success>
                    <Text style={{ color: 'white' }}>Search Blood</Text>
                </Button>

                <Button onPress={() => navigation.navigate('Donor')} style={{
                    justifyContent: 'center',
                    alignItems: 'center', flex: 1, margin: 20,
                }} rounded>
                    <Text style={{ color: 'white', }}>Register as a Donor!</Text>
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
