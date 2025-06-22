import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  return (
    
      <View style={styles.mainContainer}>

        {/* Toggle Label + Switch */}
        <View style={styles.travMode_Container}>
          <Text style={styles.toggle_lbl}>Travel Mode</Text>
          <View style={styles.toggleButton}>
            <View style={styles.toggle}/>
          </View>
        </View>

        {/* Canvas Below Toggle - trackButton_Canvas */}
        <View style={styles.trackButton_Canvas} >
          <TouchableOpacity style={styles.trackButton_ImageContainer}>
            
          </TouchableOpacity>

          <View style={styles.trackButton_Container}>
            <View style={styles.trackButton_Container_info}>
              <Text style={styles.trackButton_Container_info_lbl1} >Beeri</Text>
              <Text style={styles.trackButton_Container_info_lbl2} >Mangalore, KA</Text>
            </View>

            <TouchableOpacity style={styles.trackButton_Container_link}>
              <Text style={styles.trackButton_Container_link_lbl} >Start tracking</Text>
              <Image source={require('@/assets/images/img/ec_right_icon.png')} style={styles.trackButton_Container_link_icon} />
            </TouchableOpacity>

          </View>
        </View>

        {/* SOS-Button */}
        <TouchableOpacity style={styles.SOSButton}>
          <Image source={require('@/assets/images/img/sos_icon.png')} style={styles.SOSicon} />
          <Text style={styles.SOSlbl}>SOS</Text>
        </TouchableOpacity>

        {/* EmergencyContacts-Button */}
        <TouchableOpacity style={styles.EmergencyContactsButton}>
          <Text style={styles.EmergencyContactsButton_lbl}>Quick Contacts</Text>
          <Image source={require('@/assets/images/img/ec_right_icon.png')} style={styles.EmergencyContactsButton_icon} />
        </TouchableOpacity>

      </View>

  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "column",
    backgroundColor: "white",
  },
  travMode_Container:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 15
  },
  toggle_lbl: {
    fontSize:24,
    fontWeight:"bold"
  },
  toggleButton: {
    width: 54,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  toggle: {
    width: 20,
    height: 20,
    backgroundColor: "#BFBEBE",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    alignSelf: "flex-start"
  },
  trackButton_Canvas: {
    width: "100%",
    height: 437,
    backgroundColor: "lightgrey",
    borderWidth:2,
    borderColor: "#e7e7e7",
    borderRadius: 25,
    overflow: "hidden"
  },
  trackButton_ImageContainer:{
    flex:5,
    backgroundColor: "gray"
  },
  trackButton_Container:{
    flex:1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  trackButton_Container_info:{
    flex: 1.2,
    paddingLeft: 15,
    paddingBottom: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  trackButton_Container_info_lbl1: {
    fontSize: 22,
    color: "black",
    fontWeight: 700
  },
  trackButton_Container_info_lbl2: {
    fontSize: 18,
    color: "black",
    fontWeight: 400
  },
  trackButton_Container_link: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  trackButton_Container_link_lbl: {
    fontSize: 18,
    color: "blue",
    fontWeight: 400
  },
  trackButton_Container_link_icon: {
    width: 24,
    height: 24,
    resizeMode: "contain"
  },
  SOSButton: {
    width: "100%",
    height: 85,
    backgroundColor: "#AA3737",
    borderWidth:2,
    borderColor: "#e7e7e7",
    marginTop: 15,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  SOSlbl: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center"
  },
  SOSicon: {
    width: 35,
    height: 35
  },
  EmergencyContactsButton: {
    paddingHorizontal: 15,
    width: "100%",
    height: 85,
    borderWidth:2,
    borderColor: "#e7e7e7",
    borderRadius: 25,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  EmergencyContactsButton_lbl: {
    marginLeft: 5,
    fontSize: 22,
    color: "black",
    fontWeight: 400
  },
  EmergencyContactsButton_icon: {
    width: 35,
    height: 35,
    resizeMode: "contain"
  }
}); 





/* Toggle */

