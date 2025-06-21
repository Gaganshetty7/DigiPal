import { StyleSheet, Text, View } from "react-native";
import NavPanel from "../components/NavPanel";

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

        {/* Canvas Below Toggle */}
        <View style={styles.trackButton_Canvas} >
          <View style={styles.trackButton_ImageContainer}>

          </View>
          <View style={styles.trackButton_Container}>

          </View>
        </View>

      </View>

  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: "column",
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
    height: 450,
    backgroundColor: "lightgrey",
    borderRadius: 25,
    overflow: "hidden"
  },
  trackButton_ImageContainer:{
    flex:5,
    backgroundColor: "white"
  },
  trackButton_Container:{
    flex:1,
    backgroundColor: "gray"
  }
  
}); 





/* Toggle */

