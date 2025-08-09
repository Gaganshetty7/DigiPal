import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

// Dummy data for chat list
const conversations = [
  {
    id: '1',
    name: 'Alice',
    avatar: require('../../../assets/images/img/home.png'),
    lastMessage: 'Hey! How are you?',
    time: '4:00 PM'
  },
  {
    id: '2',
    name: 'Bob',
    avatar: require('../../../assets/images/img/home.png'),
    lastMessage: 'See you at the event.',
    time: '3:15 PM'
  }
];

export default function InboxTab() {
  const router = useRouter();

  const openChat = (id: string,  name: string) => {
      router.push(`/tabs/inbox_tab/chat/${id}?name=${encodeURIComponent(name)}`);
    };


  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.convo} onPress={() => openChat(item.id, item.name)}>
            <Image source={item.avatar} style={styles.avatar}/>
            <View style={{flex:1}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff'},
  convo: { flexDirection:'row', alignItems:'center', padding:15, borderBottomWidth:1, borderColor:'#eee' },
  avatar: { width:50, height:50, borderRadius:25, marginRight:16 },
  name: { fontWeight:'bold', fontSize:16 },
  lastMessage: { color:'#555', marginTop:2 },
  time: { color:'#999', fontSize:12, marginLeft:8 },
});
