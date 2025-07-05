import { View, Text, StyleSheet, ScrollView , TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

export default function tracking_details_page() {
  return (
    <View style = {styles.PageContainer}>

      <View style = {styles.HeaderContainer}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <View style={styles.back_button}>
              <Ionicons name="arrow-back" size={27} color="white"/>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.HeaderText}>Active Tracking</Text>
      </View>

      <View style={styles.MapContainer}>

      </View>

      <View style={styles.TrackingInfoContainer}>
        <View>
          <Text style={styles.LocationInfo}>Beeri</Text>
          <Text style={styles.LocationSubInfo}>Mangaluru, Karnataka</Text>
        </View>
         
        <View style={styles.InfoView}>
          <Text style={styles.InfoHeaders}>Tracking Since</Text>
          <Text style={styles.InfoText}>08:44 am - 16/03/2025</Text>
        </View>

        <View style={styles.InfoView}>
          <Text style={styles.InfoHeaders}>Check-in Interval</Text>
          <Text style={styles.InfoText}>20 Minutes</Text>
        </View>

        <View style={styles.InfoView}>
          <Text style={styles.InfoHeaders}>Upcoming Check - In</Text>
          <Text style={styles.InfoText}>09:04 am - 16/03/2025</Text>
        </View>

        <View style={styles.InfoView}>
          <Text style={styles.InfoHeaders}>Last Recorded Check - In</Text>
          <Text style={styles.InfoText}>08:24 am - 16/03/2025</Text>
        </View>
        
        <View>
          <View style={styles.InfoView}>
            <Text style={styles.InfoHeaders}>Checkin Timeline</Text>
            <Text style={styles.InfoText}>08:24 am - 16/03/2025</Text>
          </View>

          <TouchableOpacity style={styles.StopTrackButton}>
            <Text style = {{fontSize: 18, fontWeight: 700, color: "white"}}>Stop Tracking</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
   PageContainer: {
    height: "100%",
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
  MapContainer:{
    height: "40%",
    backgroundColor:"lightblue",
  },
  TrackingInfoContainer:{
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor:"white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: "gray",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 30
  },
  LocationInfo:{
    fontSize: 28,
    fontWeight: 700
  },
  LocationSubInfo:{
    fontWeight: 500
  },
  InfoView:{
    marginVertical:8
  },
  InfoHeaders:{
    fontSize: 18,
    fontWeight: 700
  },
  InfoText: {
    fontSize: 16,
    fontWeight: 500
  },
  StopTrackButton:{
    height: 50,
    borderRadius: 20,
    backgroundColor:"darkred",
    justifyContent: "center",
    alignItems: "center",
    bottom: -15,
    borderWidth: 1,
    borderColor: "grey"
  }
}
)