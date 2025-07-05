import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';

const items = [
    { label: '05 Minutes', value: 5 },
    { label: '10 Minutes', value: 10 },
    { label: '15 Minutes', value: 15 },
];


export default function start_tracking_page() {

    const [value, setValue] = useState(null);

  return (
    <View style = {styles.PageContainer}>
        <View style = {styles.HeaderContainer}>
            <TouchableWithoutFeedback onPress={() => router.back()}>
            <View style={styles.back_button}>
                <Ionicons name="arrow-back" size={27} color="white"/>
            </View>
            </TouchableWithoutFeedback>

            <Text style={styles.HeaderText}>Start a New Trip</Text>
        </View>

        <View style = {styles.MainContainer}>

            <View style={styles.Map_ImageContainer} >
                          
            </View>
                
            <View style = {styles.InputContainer}>
                <View style = {styles.InputDataContainer}>
                    <Text style = {styles.TitleText}>Location :</Text>
                    <Text style={{fontSize: 26}}> Auto-Detected </Text>
                </View>
                <View style = {styles.InputDataContainer}>
                    <Text style = {styles.TitleText}>Check-In Interval :</Text>
                    <Dropdown
                        style = {styles.dropdown}
                        data = {items}
                        labelField = "label"
                        valueField = "value"
                        placeholder = "Select Interval"
                        value = {value}
                        onChange={item => { setValue(item.value) }}
                    />
                </View>
            </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
   PageContainer: {
    flex: 1,
    flexDirection:"column",
  },
  HeaderContainer:{
    height: "8%",
    backgroundColor:"green",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center"
  },
  back_button:{
    width:40,
    height:40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 10
  },
  HeaderText:{
    fontSize:20,
    fontWeight:800,
    color:"white",
    alignItems:"center"
  },
  MainContainer:{
    flex: 1,
  },
  Map_ImageContainer:{
    flex: 1,
    backgroundColor: "lightblue",
    borderWidth:1,
    borderColor: "rgba(96, 96, 96, 0.5)"
  },
  InputContainer:{
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: -14,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "rgba(96, 96, 96, 0.5)",
    backgroundColor:"white",
    
    flexDirection: "column"
  },
  InputDataContainer:{
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  TitleText:{
    fontSize: 24,
    fontWeight: '800',
    marginRight: 10
  },
  dropdown: {
    height: 40,
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  
});