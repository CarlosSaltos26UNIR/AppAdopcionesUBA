import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Pantalla2 = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fondoColor.jpg')}
        style={{ width: '100%', height: '100%' }}
      />
      <Image
        style={styles.imgPerritos}
        source={require('../assets/perritos.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.logoMunicipio}
        source={require('../assets/logoBN.png')}
        resizeMode="contain"
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenFondo: {
    width: 100,
    height: 100,
  },

  imgPerritos: {
    position: 'absolute',
    top: hp(30),
    width: wp(75),
    height: 320,
  },

  logoMunicipio: {
    position: 'absolute',
    top: hp(75),
    width: wp(60),
    height: 280,
  },

});

export default Pantalla2;



