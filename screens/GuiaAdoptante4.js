import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GuiaAdoptante4 = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/fondoAdoptante-50.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgPerrosAntes}
        source={require('../assets/perrosAntes.png')}
        resizeMode="contain"
      />

      <Text style={styles.explicacion1}>Sácalo a pasear más frecuentemente la semana previa a la llegada del nuevo miembro de tu familia, que se sienta amado y que sepa que su amor no se va a ver disminuido por el nuevo animalito.</Text>

      <Text style={styles.explicacion2}>Haz que se conozcan en un entorno neutro, llévalos a un parque, que jueguen, socialicen y posteriormente que entren juntos a casa.</Text>

      <Text style={styles.explicacion3}>Destina un plato para cada animalito, la mayoría de peleas se dan en el entorno de la alimentación, define sus espacios y los primeros días, controla que no existan peleas por eso.</Text>

      <Text style={styles.explicacion4}>Mantén las mismas rutinas y dale la misma atención a tu animalito.</Text>

      <Image
        style={styles.cachorros}
        source={require('../assets/cachorros.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnAvanzar}
        onPress={() => {
          navigation.navigate('GuiaAdoptante5');
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
          navigation.navigate('GuiaAdoptante3');
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

  imgPerrosAntes: {
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
    bottom: hp(65),
    paddingHorizontal: 30,
  },

  explicacion2: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(57),
    paddingHorizontal: 30,
  },

  explicacion3: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(47),
    paddingHorizontal: 30,
  },

  explicacion4: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(40),
    paddingHorizontal: 30,
  },

  cachorros: {
    // backgroundColor: 'red',
    position: 'absolute',
    width: wp(85),
    height: hp(24),
    bottom: hp(13),
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

export default GuiaAdoptante4;



