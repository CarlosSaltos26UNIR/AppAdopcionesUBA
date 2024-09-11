import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GuiaAdoptante5 = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/fondoAdoptante-50.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgGatosAntes}
        source={require('../assets/gatosAntes.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion1}>Dentro de lo posible, lleva una prenda impregnada del olor del otro animalito para que el gatito ya reconozca ese olor como algo familiar.</Text>

      <Text style={styles.explicacion2}>El primer contacto debe ser con el olfato, sin verse, puede ser a través de una puerta o con el animalito nuevo dentro del transportador (kennel).</Text>

      <Text style={styles.explicacion3}>Cuando hayas notado que tu gato se calme y pierda el interés en el nuevo animalito, permite el contacto visual, sin posibilidad de contacto físico, se puede usar una ventana o en el mismo kennel por las rejas.</Text>

      <Text style={styles.explicacion4}>Cuando se hayan relajado los dos, permite que se conozcan.</Text>

      <Image
        style={styles.gato}
        source={require('../assets/Gato.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnAvanzar}
        onPress={() => {
          navigation.navigate('Home');
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
          navigation.navigate('GuiaAdoptante4');
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

  imgGatosAntes: {
    // backgroundColor: 'red',
    position: 'absolute',
    width: wp(88),
    height: hp(20),
    bottom: hp(75),
  },

  explicacion1: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(68),
    paddingHorizontal: 30,
  },

  explicacion2: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(60),
    paddingHorizontal: 30,
    left: 2,
  },

  explicacion3: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(38),
    paddingHorizontal: 30,
    left: 2,
    paddingRight: 195
  },

  explicacion4: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(30),
    paddingHorizontal: 30,
    left: 2,
    paddingRight: 195
  },

  gato: {
    // backgroundColor: 'red',
    position: 'absolute',
    width: wp(80),
    height: hp(50),
    bottom: hp(13),
    left: 170
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

export default GuiaAdoptante5;