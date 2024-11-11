import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Confirmacion = ({ navigation }) => {
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

      <Text style={styles.solicitud}>Solicitud Enviada</Text>

      <Text style={styles.mensaje}>
        Te llegará un correo con las indicaciones para completar el proceso de
        adopción
      </Text>

      <Pressable
        style={styles.btnHome}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          style={styles.botonHome}
          source={require('../assets/homeIcon.png')}
          resizeMode="contain"
        />
      </Pressable>


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

  imgAdopcion: {
    position: 'absolute',
    top: hp(30),
    width: wp(75),
    height: hp(75),
  },

  logoMunicipio: {
    position: 'absolute',
    top: hp(58),
    width: wp(55),
    height: hp(55),
  },

  imgPerritos: {
    position: 'absolute',
    width: wp(75),
    height: hp(75),
    bottom: hp(18),
  },

  solicitud: {
    position: 'absolute',
    color: '#233c7a',
    fontSize: wp(6),
    fontWeight: '800',
    bottom: hp(78),
  },

  mensaje: {
    position: 'absolute',
    color: '#233c7a',
    fontSize: wp(6),
    textAlign: 'center',
    fontWeight: '800',
    bottom: hp(28),
  },

  botonHome: {
    // backgroundColor: 'red',
    width: 45,
    height: 45,
  },

  btnHome: {
    position: 'absolute',
    // backgroundColor: 'orange',
    bottom: hp(3),
  },

});

export default Confirmacion;