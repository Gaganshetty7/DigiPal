import {  View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavPanel({ onMenuPress }: { onMenuPress?: () => void }) {
  const router = useRouter();

  return (
    <View style={styles.nav}>
      <Text style={styles.logo}>DigiPal</Text>

        <TouchableOpacity style={styles.hamburg_container} onPress={onMenuPress}>
            <Image source={require('@/assets/images/img/hamburger.png')} style={styles.hamburg_icon} />
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'lightgrey',
  },
  logo: {
    color: '#black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  hamburg_container: 
  { 
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hamburg_icon: 
  { 
    width: 30,
    height: 30 }
});
