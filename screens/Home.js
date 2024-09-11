import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ navigation }) => {

  const [dato, setDato] = useState(0);




  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/fondo1.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgAdopcion}
        source={require('../assets/adopcion.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnPerros}
        onPress={() => {
          navigation.navigate('Perros');
        }}>
        <Image
          style={styles.botonPerros}
          source={require('../assets/btnPerros.png')}
          resizeMode="contain"
        />
      </Pressable>

      <Pressable
        style={styles.btnGatos}
        onPress={() => {
          navigation.navigate('Gatos');
        }}>
        <Image
          style={styles.botonGatos}
          source={require('../assets/btnGatos.png')}
          resizeMode="contain"
        />
      </Pressable>

      <Pressable
        style={styles.btnAdoptante}
        onPress={() => {
          navigation.navigate('GuiaAdoptante');
        }}>
        <Image
          style={styles.botonAdoptante}
          source={require('../assets/btnEdu.png')}
          resizeMode="contain"
        />
      </Pressable>

      <Image
        style={styles.logoMunicipio}
        source={require('../assets/logoColor.png')}
        resizeMode="contain"
      />






      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagenFondo: {
    width: wp(100),
    height: hp(100),
  },

  imgAdopcion: {
    position: 'absolute',
    width: wp(45),
    height: hp(45),
    bottom: hp(65),
  },

  btnGatos: {
    // backgroundColor: 'pink',
    position: 'absolute',
    bottom: hp(45),
  },

  botonGatos: {
    width: 300,
    height: 102,
  },

  btnPerros: {
    // backgroundColor: 'green',
    position: 'absolute',
    bottom: hp(62),
  },

  botonPerros: {
    width: 300,
    height: 90,
  },

  btnAdoptante: {
    // backgroundColor: 'yellow',
    position: 'absolute',
    bottom: hp(28),
  },

  botonAdoptante: {
    // backgroundColor: 'red',
    width: 300,
    height: 98,
  },

  logoMunicipio: {
    position: 'absolute',
    // backgroundColor: '#FF1493',
    width: wp(60),
    height: hp(9),
    top: hp(82),
  },





});

export default Home;