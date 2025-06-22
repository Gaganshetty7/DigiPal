import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavPanel() {
  const router = useRouter();

  return (
    <View style={styles.nav}>
      <Text style={styles.logo}>DigiPal</Text>
      <View style={styles.links}>
        {/* <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity> */}

        <TouchableOpacity>
          <View style={styles.profile_img_container}>
            <Image source={require('@/assets/images/img/logo.png')} style={styles.profile_img} />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => router.push('/about')}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>*/}

      </View>
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
  links: {
    flexDirection: 'row',
  },
  link: {
    color: 'black',
    fontSize: 16,
    marginLeft: 16,
  },
  profile_img_container: 
  { 
    width: 35,
    height: 35,
    borderWidth:2,
    borderColor: "#e7e7e7",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  profile_img: 
  { 
    width: 35,
    height: 35 }
});
