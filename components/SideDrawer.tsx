import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

const { width } = Dimensions.get('window');

export default function SideDrawer({ onClose }: { onClose: () => void }) {
  
  const slideAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();
  },[]);
  
  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
      <Text style={styles.title}>Side Drawer</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>



    </Animated.View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 4,
    zIndex: 1000,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  close: {
    color: '#007AFF',
    marginTop: 20,
    fontSize: 16,
  },
});
