import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appFirebase from "../credenciales";

// Inicializa Firestore
const db = getFirestore(appFirebase);

const GatosDetalle = ({ route, navigation }) => {
  const { itemId } = route.params; // Obtenemos itemId de los parámetros de navegación
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    const getListaCat = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gatos"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filtramos el perro que coincide con el itemId que pase antes desde la otra pantalla jeje
        const dog = docs.find(doc => doc.id === itemId);
        setSelectedDog(dog); // Establecemos el perro encontrado en el estado el que va a mostrarse en pantalla
      } catch (error) {
        console.error("Error fetching dog:", error);
      }
    };

    getListaCat();
  }, [itemId]);

  // Si no se encuentra el perro o está cargando, mostramos un mensaje o indicador de carga, esto es para cuando se demore en cargar OJO

  if (!selectedDog) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fondo1.jpg')}
        style={{ width: '100%', height: '100%' }}
      />
      <View style={styles.cajaFlotante}>
        <View>
          <Image
            style={styles.imgSuperior}
            source={require('../assets/tituloGatos.png')}
            resizeMode="contain"
          />

          <Pressable
            style={styles.btnRetroceder}
            onPress={() => {
              navigation.navigate('Gatos');
            }}>
            <Image
              style={styles.botonRetroceder}
              source={require('../assets/retroceder.png')}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.contenedorPerros}>
          <View key={selectedDog.id} style={[styles.box]}>

            <Image source={{ uri: selectedDog.img }} style={styles.poster} resizeMode="cover" />
            <Text style={styles.nombreAnimal}>{selectedDog.nombre}</Text>
            <Text style={styles.historia}>{selectedDog.historia}</Text>

          </View>
        </View>
        <View>
          <Pressable
            style={styles.btnAplicar}
            onPress={() => {
              navigation.navigate('Solicitud');
            }}>
            <Image
              style={styles.botonAplicar}
              source={require('../assets/aplicar.png')}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>

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

  cajaFlotante: {
    position: 'absolute',
    width: '90%',
    height: '95%',
    // backgroundColor: 'red'
  },

  contenedorPerros: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: (-30),
    // backgroundColor: 'gray'
  },

  image: {
    width: 175,
    height: 175,
  },

  box: {

  },

  botonRetroceder: {
    // backgroundColor: 'red',
    width: 130,
    height: 40,
    top: 0,
  },

  btnRetroceder: {
    position: 'absolute',
    // backgroundColor: 'orange',
    bottom: hp(8),
    right: wp(55)
  },

  imgSuperior: {
    // backgroundColor: 'red',
    left: wp(45),
    width: wp(45),
    height: hp(16),
    top: (-30)
  },

  tituloPerros: {
    backgroundColor: '#29377c',
    color: 'white',
    fontSize: wp(4),
    fontWeight: '400',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  poster: {
    width: wp(90),
    height: hp(40),
  },
  nombreAnimal: {
    fontSize: 20,
    backgroundColor: '#29377c',
    padding: 8,
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',



  },

  historia: {
    fontSize: 15,
    padding: 10,
    textAlign: 'justify',
    color: '#29377c',
    fontWeight: '300',

  },

  botonAplicar: {
    // backgroundColor: 'red',
    width: 230,
    height: 40,
  },

  btnAplicar: {
    position: 'absolute',
    // backgroundColor: 'orange',
    bottom: hp(8),
    right: wp(20),
    bottom: (20)
  },
});

export default GatosDetalle;
