import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Solicitud = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  // Función para validar los campos
  const validateFields = () => {
    console.log('validando');
    if (!nombre || !apellido || !telefono || !correo) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      Alert.alert('Error', 'El correo electrónico no es válido.');
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(telefono)) {
      Alert.alert('Error', 'El número de teléfono debe tener 10 dígitos.');
      return false;
    }

    return true;
  };

  // Función para enviar los datos
  const enviarSolicitud = async () => {
    console.log('enviado');
    if (!validateFields()) return;

    try {
      const response = await fetch('https://tu-api.com/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          telefono,
          correo,
        }),
      });

      if (response.ok) {
        Alert.alert('Éxito', 'Tu solicitud ha sido enviada.');
        navigation.navigate('Confirmacion');
      } else {
        Alert.alert('Error', 'Hubo un problema al enviar tu solicitud.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/fondoAdoptante-50.jpg')}
            style={{ width: '100%', height: '100%' }}
          />

          <View style={styles.formularioArea}>
            <Text style={styles.datos}>Ingresa tus 2 nombres</Text>
            <TextInput style={styles.entradaTexto} value={nombre} onChangeText={setNombre} />

            <Text style={styles.datos}>Ingresa tus 2 apellidos</Text>
            <TextInput style={styles.entradaTexto} value={apellido} onChangeText={setApellido} />

            <Text style={styles.datos}>Ingresa tu número de teléfono</Text>
            <TextInput style={styles.entradaTexto} value={telefono} onChangeText={setTelefono} keyboardType="numeric" />

            <Text style={styles.datos}>Ingresa tu correo electrónico</Text>
            <TextInput style={styles.entradaTexto} value={correo} onChangeText={setCorreo} keyboardType="email-address" />
          </View>

          <View style={styles.cajaBoton}>
            <Pressable
              style={styles.btnAplicar}
              onPress={enviarSolicitud}
            >
              <Image
                style={styles.botonAplicar}
                source={require('../assets/enviarSolicitud.png')}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <Image
            style={styles.imgPerritos}
            source={require('../assets/perritos.png')}
            resizeMode="contain"
          />

          <Image
            style={styles.logoMunicipio}
            source={require('../assets/logoColor.png')}
            resizeMode="contain"
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPerritos: {
    position: 'absolute',
    width: wp(45),
    height: hp(20),
    top: hp(62),
    // backgroundColor: 'red'
  },
  cajaBoton: {
    flex: 1,
    position: 'absolute',
    width: '90%',
    height: 50,
    top: 450,
  },
  botonAplicar: {
    width: 230,
    height: 40,
    left: 70,
    // backgroundColor: 'red'
  },
  btnAplicar: {
    position: 'absolute',
  },
  datos: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#233c7a',
  },
  entradaTexto: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 0.5,
  },
  formularioArea: {
    width: '90%',
    height: '70%',
    position: 'absolute',
    top: 80,
  },
  logoMunicipio: {
    position: 'absolute',
    top: hp(64),
    width: wp(55),
    height: hp(55),
  },
});

export default Solicitud;
