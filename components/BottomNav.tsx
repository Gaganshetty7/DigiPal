import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <Text>BottomNav</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    });