import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GuiaAdoptante2 = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/fondoAdoptante-50.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgRequisitos}
        source={require('../assets/requisitos.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.imgReq1}
        source={require('../assets/aset1.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion1}>Tiempo: ya que necesitará atención, limpieza, alimentación y cuidados diarios, de acuerdo a su raza, tamaño y especie, incluso hay animales que necesitan cepillado diario de su pelaje.</Text>

      <Image
        style={styles.imgReq2}
        source={require('../assets/aset2.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion2}>Presupuesto:  debes tener en cuenta que tu perro o gato necesita vacunas anuales, desparasitaciones trimestrales, alimentación diaria y cuidados permanentes.</Text>

      <Image
        style={styles.imgReq3}
        source={require('../assets/aset3.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion3}>Espacio: necesitará un lugar para jugar, descansar y dormir cada vez que lo necesite, debiendo ser un lugar seguro, cómodo y limpio, sin estar expuesto a las inclemencias del clima.</Text>

      <Image
        style={styles.imgReq4}
        source={require('../assets/aset4.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion4}>Motivación: La adopción de un animal de compañía es un acto de amor y justicia. Recuerda que un perro o gato no es una mascota, no es un juguete, sino que son seres que sienten y tienen derechos.</Text>

      <Image
        style={styles.michito2}
        source={require('../assets/perritos.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnAvanzar}
        onPress={() => {
          navigation.navigate('GuiaAdoptante3');
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
          navigation.navigate('GuiaAdoptante1');
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

  imgRequisitos: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(30),
    height: hp(5),
    bottom: hp(90),
    left: wp(7)
  },

  imgReq1: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(30),
    height: hp(6),
    bottom: hp(81),
    left: wp(-2)
  },

  explicacion1: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(78),
    paddingHorizontal: 25,
    paddingLeft: 100
  },

  imgReq2: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(30),
    height: hp(6),
    bottom: hp(69),
    left: wp(-2)
  },

  explicacion2: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(68),
    paddingHorizontal: 25,
    paddingLeft: 100
  },

  imgReq3: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(30),
    height: hp(7),
    bottom: hp(58),
    left: wp(-3)
  },

  explicacion3: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(56),
    paddingHorizontal: 25,
    paddingLeft: 100
  },

  imgReq4: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(30),
    height: hp(7),
    bottom: hp(45),
    left: wp(-3)
  },

  explicacion4: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(44),
    paddingHorizontal: 25,
    paddingLeft: 99
  },

  antesAdoptar: {
    position: 'absolute',
    left: wp(8),
    width: wp(35),
    height: hp(35),
    bottom: hp(28),
  },

  expli: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(10),
    paddingHorizontal: 30,
    paddingRight: 200
  },

  michito2: {
    position: 'absolute',
    // backgroundColor: '#ADFF2F',
    width: wp(75),
    height: hp(36),
    bottom: hp(6),
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

export default GuiaAdoptante2;