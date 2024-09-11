import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GuiaAdoptante = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/fondoAdoptante-50.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgAdoptante}
        source={require('../assets/adoptante.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion1}>Esta guía pretende resolver las dudas que puedan surgir a quienes adoptan un perro o un gato de los refugios de la Unidad de Bienestar Animal (UBA) del Municipio de Quito. Los consejos que contiene, han sido elaborados por expertos veterinarios con el objetivo que el proceso de adopción y la convivencia con el nuevo miembro de la familia sea todo un éxito.</Text>

      <Text style={styles.explicacion2}>Recuerda que la adopción es una decisión de toda la familia y es para toda la vida, debe ser tomada con responsabilidad y en común acuerdo con todas las personas que viven en casa.
        Debes tomar en cuenta los siguientes puntos:
        El promedio de vida de un perro es de 10-13 años y el de un gato es de 12-18 años, por lo que, la decisión de adoptar es para toda la vida.</Text>



      <Image
        style={styles.antesAdoptar}
        source={require('../assets/antesAdoptar.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.michito}
        source={require('../assets/michito.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnAvanzar}
        onPress={() => {
          navigation.navigate('GuiaAdoptante2');
        }}>
        <Image
          style={styles.botonAvanzar}
          source={require('../assets/avanzar.png')}
          resizeMode="contain"
        />
      </Pressable>

      <Pressable
        style={styles.btnRetroceder}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          style={styles.botonRetroceder}
          source={require('../assets/retroceder.png')}
          resizeMode="contain"
        />
      </Pressable>

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

  imgAdoptante: {
    position: 'absolute',
    width: wp(50),
    height: hp(50),
    bottom: hp(56),
  },

  explicacion1: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(52),
    paddingHorizontal: 30,
  },

  antesAdoptar: {
    position: 'absolute',
    left: wp(8),
    width: wp(35),
    height: hp(35),
    bottom: hp(28),
  },

  explicacion2: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(10),
    paddingHorizontal: 30,
    paddingRight: 200
  },

  michito: {
    position: 'absolute',
    left: wp(34),
    width: wp(95),
    height: hp(95),
    bottom: hp(-23),
  },

  botonAvanzar: {
    // backgroundColor: 'red',
    width: 130,
    height: 40,
  },

  btnAvanzar: {
    position: 'absolute',
    // backgroundColor: 'green',
    bottom: hp(3),
    right: wp(8)
  },

  botonRetroceder: {
    // backgroundColor: 'red',
    width: 130,
    height: 40,
  },

  btnRetroceder: {
    position: 'absolute',
    // backgroundColor: 'orange',
    bottom: hp(3),
    right: wp(60)
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

export default GuiaAdoptante;