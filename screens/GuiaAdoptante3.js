import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GuiaAdoptante3 = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/fondoAdoptante-50.jpg')}
        style={{ width: '100%', height: '100%' }}
      />

      <Image
        style={styles.imgLlegada}
        source={require('../assets/llegadaCasa.png')}
        resizeMode="contain"
      />


      <Text style={styles.concepto}>Debemos entender que el cambio de residencia, las nuevas rutinas y adaptarse a sus nuevas actividades implica un desgaste para él y pueden existir algunos cambios que puedes notar.</Text>

      <Image
        style={styles.patita1}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.patita2}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.patita3}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.patita4}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.patita5}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Image
        style={styles.patita6}
        source={require('../assets/patita.png')}
        resizeMode="contain"
      />

      <Text style={styles.lista1}>Decide el lugar donde vas a instalar su camita.</Text>

      <Text style={styles.lista2}>Define un lugar donde quieres que haga sus necesidades.</Text>

      <Text style={styles.lista3}>Utiliza su nombre cuando quieres su atención, evitando diminutivos.</Text>

      <Text style={styles.lista4}>Cómprale juguetes que no causen daño.</Text>

      <Text style={styles.lista5}>Ten cuidado con la ubicación de los productos nocivos.</Text>

      <Text style={styles.lista6}>Retira los cables y protege los enchufes que puedan quedar a su alcance.</Text>

      {/*<Text style={styles.lista7}>Infórmate de si las plantas que tienes son tóxicas.</Text> */}

      <Image
        style={styles.perrito}
        source={require('../assets/perroAcostado.png')}
        resizeMode="contain"
      />

      <Pressable
        style={styles.btnAvanzar}
        onPress={() => {
          navigation.navigate('GuiaAdoptante4');
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
          navigation.navigate('GuiaAdoptante2');
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

  imgLlegada: {
    position: 'absolute',
    // backgroundColor: '#8A2BE2',
    width: wp(50),
    height: hp(13),
    bottom: hp(75),
    right: wp(6)
  },

  concepto: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(46),
    paddingHorizontal: 25,
  },

  lista1: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(37),
    paddingHorizontal: 25,
    paddingLeft: 45
  },

  lista2: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(32),
    paddingHorizontal: 25,
    paddingLeft: 34
  },

  lista3: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(27),
    paddingHorizontal: 25,
    paddingLeft: 45
  },

  lista4: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(23.5),
    paddingHorizontal: 25,
    paddingLeft: 2
  },

  lista5: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(18),
    paddingHorizontal: 25,
    paddingLeft: 45
  },

  lista6: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(12),
    left: 10,
    paddingHorizontal: 25,
    paddingLeft: 60
  },

  lista7: {
    position: 'absolute',
    color: '#000000',
    fontSize: wp(3.5),
    textAlign: 'justify',
    bottom: hp(37),
    paddingHorizontal: 25,
    paddingLeft: 45
  },

  patita1: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(36),
  },

  patita2: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(33),
  },

  patita3: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(28),
  },

  patita4: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(23),
  },

  patita5: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(19),
  },

  patita6: {
    position: 'absolute',
    left: wp(10),
    width: wp(4),
    height: hp(4),
    bottom: hp(13),
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

  perrito: {
    position: 'absolute',
    // backgroundColor: '#ADFF2F',
    width: wp(80),
    height: hp(45),
    bottom: hp(55),
    left: -80,
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

export default GuiaAdoptante3;