import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useEffect, useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appFirebase from "../credenciales";
import {
  addDoc,
  collection,
  getFirestore,
  getDoc,
  getDocs,
} from "firebase/firestore";


// Importaciones de firebase
const db = getFirestore(appFirebase);

const Perros = ({ navigation }) => {

  // Crear variables para leer datos de firebase
  const [listaDog, setListaDog] = useState([]);

  useEffect(() => {
    const getListaDog = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "perros"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListaDog(docs);
        // console.log(docs)
      } catch (error) {
        // console.error(error);
      }
    };
    getListaDog();
  }, []);


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
            source={require('../assets/tituloPerros.png')}
            resizeMode="contain"
          />

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
        </View>
        <ScrollView>
          <View style={styles.contenedorPerros}>
            {
              listaDog.map((list) => (
                <View key={list.id} style={[styles.box]}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PerrosDetalle', { itemId: list.id })}>
                    <Image source={{ uri: list.img }} style={styles.image} resizeMode="cover" />
                    <Text style={styles.tituloPerros}>{list.nombre}</Text>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
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
    flexWrap: 'wrap'
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
    textAlign: 'center',
    color: 'white',
    fontSize: wp(4),
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10,
  }



});

export default Perros;