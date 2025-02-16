import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "../components/SignInFolder/signIn/signIn";
import SignUpScreen from "../components/SignInFolder/signUp/signUpScreen";
import SignUpTwo from "../components/SignInFolder/signUpTwo/signUpTwo";
import FirstScreen from "../components/SignInFolder/first/firstScreen";
import confirm from "../components/SignInFolder/confirm/confirm";

const SignInNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="first" component={FirstScreen} options={{headerShown: false}}/>
            <Stack.Screen name="signIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="signUp" component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name="signUpTwo" component={SignUpTwo} options={{headerShown: false}}/>
            <Stack.Screen name="confirm" component={confirm} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default SignInNavigator