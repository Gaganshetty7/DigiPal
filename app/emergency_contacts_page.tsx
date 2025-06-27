import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export default function emergency_contacts_page() {
  return (
    <View style={styles.ecpage_maincontainer}>

    <TouchableOpacity style={styles.back_button} onPress={() => router.back()} >
      <Image source={require('../assets/images/img/left_shift_icon.png')} style={styles.left_shift_icon} />
    </TouchableOpacity>

    <View style={styles.quick_contacts_container}>

        <Text style={styles.quick_contacts_lbl}>Quick Contacts</Text>

        <ScrollView style={styles.contacts_list}>
          <View style={styles.contacts_container}>
            <Text style={styles.contacts_list_header}>Contacts list empty!</Text>
          </View>
          <View style={styles.contacts_container}>
            <Text style={styles.contacts_list_header}>Contacts list empty!</Text>
            <Text style={styles.contacts_list_header}>Contacts list empty!</Text>
          </View>

          <TouchableWithoutFeedback style={styles.add_contacts_button}>
            <Text style={styles.add_contacts_link}>Add Contacts +</Text>
          </TouchableWithoutFeedback>

        </ScrollView>

    </View>
    
    </View>

  )
}

const styles = StyleSheet.create({
  ecpage_maincontainer:{
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "column",
    backgroundColor: "white"
  },
  back_button:{
    backgroundColor: "#BFBEBE",
    width:40,
    height:40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  left_shift_icon: {
    width: 27,
    height: 27,
    resizeMode: "contain"
  },
  quick_contacts_container:{
    borderWidth: 2,
    borderColor: "#BFBEBE",
    width: "100%",
    borderRadius: 25,
    marginTop: 30,
    overflow: "hidden",
    padding: 15,
    marginBottom: 20
  },
  quick_contacts_lbl: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  contacts_list:{
    overflow: "hidden",
  },
  contacts_container:{
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "center"
  },
  contacts_list_header:{
    fontSize: 20,
    fontWeight: "500",
    color: "black"
  },
  add_contacts_button:{
    backgroundColor: "green",
    alignSelf: "flex-start",
  },
  add_contacts_link: {
    fontSize: 16,
    fontWeight: "400",
    color: "#007AFF",
    marginTop: 10,
  }
});