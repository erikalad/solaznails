import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import img1 from './../../assets/images/fotos/1.webp'
import img2 from './../../assets/images/fotos/2.webp'
import img3 from './../../assets/images/fotos/3.webp'
import img4 from './../../assets/images/fotos/4.jpg'
import img5 from './../../assets/images/fotos/5.jpg'
import img6 from './../../assets/images/fotos/6.jpg'
import img7 from './../../assets/images/fotos/7.webp'
import img8 from './../../assets/images/fotos/8.jpg'
import img9 from './../../assets/images/fotos/9.jpg'
import img10 from './../../assets/images/fotos/10.jpg'
import img11 from './../../assets/images/fotos/11.webp'
import img12 from './../../assets/images/fotos/12.webp'
import img13 from './../../assets/images/fotos/13.webp'
import img15 from './../../assets/images/fotos/15.jpg'
import img16 from './../../assets/images/fotos/16.webp'
import img17 from './../../assets/images/fotos/17.webp'
import img18 from './../../assets/images/fotos/18.webp'
import img19 from './../../assets/images/fotos/19.webp'
import img20 from './../../assets/images/fotos/20.webp'
import img21 from './../../assets/images/fotos/21.webp'
import img22 from './../../assets/images/fotos/22.webp' 
import Nav from '../../components/Nav';

const GalleryScreen = () => {
  const images = [
    { id: '1', uri: img1 },
    { id: '2', uri: img2 },
    { id: '3', uri: img3 },
    { id: '4', uri: img4 },
    { id: '5', uri: img5 },
    { id: '6', uri: img6 },
    { id: '7', uri: img7 },
    { id: '8', uri: img8 },
    { id: '9', uri: img9 },
    { id: '10', uri: img10 },
    { id: '11', uri: img11 },
    { id: '12', uri: img12 },
    { id: '13', uri: img13 },
    { id: '15', uri: img15 },
    { id: '16', uri: img16 },
    { id: '17', uri: img17 },
    { id: '18', uri: img18 },
    { id: '19', uri: img19 },
    { id: '20', uri: img20 },
    { id: '21', uri: img21 },
    { id: '22', uri: img22 }, 
  ];

  const renderItem = ({ item }) => (
    <Image source={item.uri} style={styles.image} />
  );

  return (
    <SafeAreaView style={styles.container}>
       <Nav name="Mis trabajos"/>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical:20,
    backgroundColor:'#e0f7fa'
  },
  image: {
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    margin: 5,
  },
});

export default GalleryScreen;
