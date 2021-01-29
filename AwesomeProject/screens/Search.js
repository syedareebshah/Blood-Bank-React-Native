import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import database from '@react-native-firebase/database';
import { useState, useEffect } from 'react';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Search = ({ route, navigation, data }) => {
  let [Rdata, setRdata] = useState("")


  const DATA = data

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const x = route.params;
  console.log("ye lo ", x.bg)


  if (x.bg == "A+") {
    areeb()
    // database().ref('A+').once('value').then(snapshot => {
    //         console.log('User data: ', snapshot.val());
    //       });
  } else {
    console.log("err")
  }

  

  function areeb() {
    database().ref('A+').once('value').then(snapshot => {
      let dataRef = Object.values(snapshot.val())
      setRdata(dataRef)
      console.log('User data: ', snapshot.val());
      console.log('User ka abba: ', dataRef);

    });
    console.log("hahaha")
  }

 
  console.log("gotData====>", Rdata) //mil b rha hy chll b rha hy 

// useEffect(() => {
//     areeb()

//   }, []);



  // switch (x.bg) {
  //   case "A+":

  //       database().ref('A+').once('value').then(snapshot => {
  //         let dataRef = Object.values(snapshot.val())
  //         // setRdata(dataRef)
  //         console.log('User data: ', snapshot.val());
  //         console.log('User ka abba: ', dataRef);

  //       });


  //     break;
  //   case "A-":
  //     database().ref('A-').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "B+":
  //     database().ref('B+').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "B-":
  //     database().ref('B-').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "O+":
  //     database().ref('O+').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "O-":
  //     database().ref('O-').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "AB+":
  //     database().ref('AB+').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   case "AB-":
  //     database().ref('AB-').once('value').then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //     break;
  //   default:
  //     console.log("Not Found")

  // }






  // database().ref('AB-').once('value').then(snapshot => { console.log('User data: ', snapshot.val());
  // });


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
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
  title: {
    fontSize: 32,
  },
});


const mapStateToProps = (state) => ({
  data: state.data

})

export default connect(mapStateToProps, null)(Search);