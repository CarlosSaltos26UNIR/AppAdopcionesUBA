import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Pantalla1 from "./screens/Pantalla1";
import Pantalla2 from "./screens/Pantalla2";
import Gatos from "./screens/Gatos";
import Perros from "./screens/Perros";
import GatosDetalle from "./screens/GatosDetalle";
import PerrosDetalle from "./screens/PerrosDetalle";
import Solicitud from "./screens/Solicitud";
import Confirmacion from "./screens/Confirmacion";
import GuiaAdoptante from "./screens/GuiaAdoptante";
import { SafeAreaView } from "react-native-safe-area-context";
import GuiaAdoptante2 from "./screens/GuiaAdoptante2";
import GuiaAdoptante3 from "./screens/GuiaAdoptante3";
import GuiaAdoptante4 from "./screens/GuiaAdoptante4";
import GuiaAdoptante5 from "./screens/GuiaAdoptante5";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Confirmacion">
      <Stack.Screen name="Pantalla1" component={Pantalla1} options={{ headerShown: false }} />
      <Stack.Screen name="Pantalla2" component={Pantalla2} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Gatos" component={Gatos} options={{ headerShown: false }} />
      <Stack.Screen name="Perros" component={Perros} options={{ headerShown: false }} />
      <Stack.Screen name="GatosDetalle" component={GatosDetalle} options={{ headerShown: false }} />
      <Stack.Screen name="PerrosDetalle" component={PerrosDetalle} options={{ headerShown: false }} />
      <Stack.Screen name="Solicitud" component={Solicitud} options={{ headerShown: false }} />
      <Stack.Screen name="Confirmacion" component={Confirmacion} options={{ headerShown: false }} />
      <Stack.Screen name="GuiaAdoptante" component={GuiaAdoptante} options={{ headerShown: false }} />
      <Stack.Screen name="GuiaAdoptante2" component={GuiaAdoptante2} options={{ headerShown: false }} />
      <Stack.Screen name="GuiaAdoptante3" component={GuiaAdoptante3} options={{ headerShown: false }} />
      <Stack.Screen name="GuiaAdoptante4" component={GuiaAdoptante4} options={{ headerShown: false }} />
      <Stack.Screen name="GuiaAdoptante5" component={GuiaAdoptante5} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </SafeAreaView>
  )
}