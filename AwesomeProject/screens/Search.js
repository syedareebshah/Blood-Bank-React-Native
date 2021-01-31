import React from 'react';
import { ScrollView, View,  StyleSheet,  Text,  } from 'react-native';
import { connect } from 'react-redux';
import database from '@react-native-firebase/database';
import { useState, useEffect } from 'react';





const Search = ({route, navigation}) => {
  let [Rdata, setRdata] = useState([{ name:'Loading results'}])


  const x = route.params;
  console.log("ye lo ", x.bg)

  switch (x.bg) {
    case "A+":
  
      useEffect(()=>{
            database().ref('A+').once('value').then(snapshot =>{
              let dataRef = Object.values(snapshot.val());
              setRdata(dataRef)
            })
        },[])
  
  
      break;
    case "A-":
      useEffect(()=>{
        database().ref('A-').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "B+":
      useEffect(()=>{
        database().ref('B+').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "B-":
      useEffect(()=>{
        database().ref('B-').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "O+":
      useEffect(()=>{
        database().ref('O+').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "O-":
      useEffect(()=>{
        database().ref('O-').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "AB+":
      useEffect(()=>{
        database().ref('AB+').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    case "AB-":
      useEffect(()=>{
        database().ref('AB-').once('value').then(snapshot =>{
          let dataRef = Object.values(snapshot.val());
          setRdata(dataRef)
        })
    },[])
      break;
    default:
      console.log("Not Found")
  
  }

console.log("gotData====>", Rdata) //mil b rha hy chll b rha hy 

  return (
    <ScrollView style={styles.main}>
      {Rdata.map((v, i) => {
        return (
          <View key={i}>
            <Text style={styles.item}>Name: {v.name} {"\n"}Blood Group: {v.bloogGrop} {"\n"}Contact: {v.phoneNo}</Text>
          </View>
        )
      })}

    </ScrollView>
  );

}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    fontSize:18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  
});


const mapStateToProps = (state) => ({
  data: state.data

})

export default connect(mapStateToProps, null)(Search);