import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Route, usePathname, useRouter } from 'expo-router';

export default function BottomNav() {

  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {name: "Home", route:"/tabs", icon: require('../assets/images/img/home.png')},
    {name: "Checkins", route:"/tabs/checkin_tab", icon: require('../assets/images/img/notification.png')},
    {name: "Inbox", route:"/tabs/inbox_tab/", icon: require('../assets/images/img/inbox.png')},
    {name: "Profile", route:"/tabs/profile_tab", icon: require('../assets/images/img/profile_icon.png')},
  ];

  return (
    <View style={styles.bottomNavContainer}>
      {tabs.map((tab, index) =>{
        const isActive = pathname === tab.route || pathname === `${tab.route}/index`;
        return(
          <TouchableOpacity key={index} style={styles.button} onPress={() => {
            if(pathname !== tab.route && pathname !== `${tab.route}/index`) {
              router.push(tab.route as Route);
            }
          }}>
            <View style={styles.tabButtonIconContainer}>
              <Image source={tab.icon} style={styles.tabButtonIcon}/>
            </View>
            <Text>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles =StyleSheet.create({
    bottomNavContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
    },
    button:{
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderColor: "black"
    },
    tabButtonIconContainer:{
      width: 26,
      height: 26,
      marginBottom: 4
    },
    tabButtonIcon: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    }
    });