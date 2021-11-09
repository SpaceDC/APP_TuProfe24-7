import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import firebase from '../database/firebase'

const db = firebase.firestore();

//db.settings({timestampsInSnapshots: true});

const collection = db.collection('posts/SFJy8llHoHgAWMhHb1DxUURProB3/userPosts');

collection.get().then(snapshot => {

  snapshot.forEach(doc => {

    console.log( doc.data().caption );    
    //console.log( doc.data().mail );

  });
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Publicación 11:29',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Post 01',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.rv72hk62sb8?alt=media&token=66d61b37-41a7-495d-8363-022ad480290a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Algo35',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
    title: 'Publicación 11:29',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    title: 'Post 01',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.rv72hk62sb8?alt=media&token=66d61b37-41a7-495d-8363-022ad480290a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Algo35',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
    title: 'Publicación 11:29',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Post 01',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.rv72hk62sb8?alt=media&token=66d61b37-41a7-495d-8363-022ad480290a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Algo35',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
    title: 'Publicación 11:29',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
    title: 'Post 01',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.rv72hk62sb8?alt=media&token=66d61b37-41a7-495d-8363-022ad480290a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Algo35',
    uri: 'https://firebasestorage.googleapis.com/v0/b/bdtuprofe24-7.appspot.com/o/post%2FSFJy8llHoHgAWMhHb1DxUURProB3%2F0.tc06hyro1pd?alt=media&token=9e58b6f8-b6ac-4723-81a4-14a8f1a0f69c',
  },
];

const Item = ({ title, uri }) => (

  <View
  style={styles.containerImage}>
  <Text style={styles.container}>{title}</Text>
  <Image
      style={styles.image}
      source={{ uri }}
  />

  <Text>View Comments...</Text>
  </View>

);

const HomeScreen = () => {
  const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tittle:{      //estílo del título
    color: '#006fcc',
    fontSize:22,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 60,
    alignSelf: 'center'
  },
 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
  },
  containerInfo: {
      margin: 20
  },
  containerGallery: {
      flex: 1
  },
  containerImage: {
      flex: 1 / 3

  },
  image: {
      flex: 5,
      aspectRatio: 1 / 1
  }
});

export default HomeScreen;