import React from 'react';
import { useState } from 'react';
import database from '@react-native-firebase/database';

import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, Item, Input, Toast } from 'native-base';






const Donor = ({ navigation }) => {
    let [name, setName] = useState("")
    let [bloogGrop, setBloogGrop] = useState("")
    let [phoneNo, setPhoneNo] = useState("")
    let [age, setAge] = useState("")


    const [selectedValue, setSelectedValue] = useState("java");

    const Register = () => {
        let user = {
            name,
            bloogGrop,
            phoneNo,
            age,
        }
        console.log("haha", user);

        if (user.name == "" || user.bloogGrop == "" || user.phoneNo == "" || user.phoneNo.length < 11 || user.age == "" || user.age.length < 2) {
            alert("Invalid Entry")
        }
        else {
            bgCheck(user)
            setName("");
            setBloogGrop("");
            setPhoneNo("");
            setAge("");
            navigation.navigate('User')

        }


        // database().ref('/').child('O+').push(user)

        // const reference = database().ref('/users/123');
    }
    let bgCheck = (user) => {
        var bg = user.bloogGrop.toUpperCase();
        var firstChar = user.name.slice(0,1) 
        var lastChar = user.name.slice(1) 
        firstChar = firstChar.toUpperCase();
        lastChar = lastChar.toLowerCase()
        var full = firstChar + lastChar
        // console.log(full)
        user.name = full
        user.bloogGrop = bg

        // console.log("bgCheck", bg, user)
        switch (bg) {
            case "A+":
                database().ref('/').child('A+').push(user)
                break;
            case "A-":
                database().ref('/').child('A-').push(user)
                break;
            case "B+":
                database().ref('/').child('B+').push(user)
                break;
            case "B-":
                database().ref('/').child('B-').push(user)
                break;
            case "O+":
                database().ref('/').child('O+').push(user)
                break;
            case "O-":
                database().ref('/').child('O-').push(user)
                break;
            case "AB+":
                database().ref('/').child('AB+').push(user)
                break;
            case "AB-":
                database().ref('/').child('AB-').push(user)
                break;
            default:
                alert("Please Enter Correct Blood Group")

        }
    }
    return (
        <ScrollView style={styles.main}>
            <View style={styles.one} >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Text style={{ margin: 20, fontSize: 16 }} >Note: Enter the data carefully. Once you submit, it cannot be changed</Text>
                <Item style={{ flex: 1, marginBottom: 20, marginRight: 20, marginLeft: 20, }} rounded>
                    <Input keyboardType="name-phone-pad" require={true} value={name} onChangeText={(Text) => setName(Text)} textAlign={'center'} placeholder='Enter Full Name' />
                </Item>
                <Item style={{ flex: 1, marginBottom: 20, marginRight: 20, marginLeft: 20, }} rounded>
                    <Input maxLength={2} keyboardType="numeric" value={age} onChangeText={(Text) => setAge(Text)} textAlign={'center'} placeholder='Enter Age' />
                </Item>
                <Item style={{ flex: 1, marginBottom: 20, marginRight: 20, marginLeft: 20, }} rounded>
                    <Input keyboardType="twitter" value={bloogGrop} onChangeText={(Text) => setBloogGrop(Text)} textAlign={'center'} placeholder='Enter Blood Group' />
                </Item>
                <Item style={{ flex: 1, marginBottom: 20, marginRight: 20, marginLeft: 20, }} rounded>
                    <Input maxLength={11} keyboardType="phone-pad" value={phoneNo} onChangeText={(Text) => setPhoneNo(Text)} textAlign={'center'} placeholder='Enter Mobile No.' />
                </Item>
                <Button onPress={() => Register()} primary style={{ padding: '10%', alignSelf: 'center' }}>
                    <Text style={{ color: 'white' }}>Submit</Text>
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
