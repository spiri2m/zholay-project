import { StatusBar } from 'expo-status-bar';
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignInNavigator from "./navigation/SignInNavigator";
import MainNavigator from "./navigation/MainNavigator";
export default function App() {
  let [loaded, error] = useFonts({
    'PBold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'PRegular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'PLight': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'PMedium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'ILight': require('./assets/fonts/Inter/static/Inter_18pt-Light.ttf'),
    'IRegular': require('./assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    'IBold': require('./assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
    'IMedium': require('./assets/fonts/Inter/static/Inter_18pt-Medium.ttf')
  })
  if(!loaded) {
    return null
  }
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="sign" component={SignInNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="main" component={MainNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}