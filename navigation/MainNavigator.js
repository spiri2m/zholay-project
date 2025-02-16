import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, View} from 'react-native'
import Delivery from "../components/MainFolder/deliveries/delivery";
import homeActive from '../assets/images/homeActive.png'
import home from '../assets/images/home.png'
import QR from '../assets/images/QR.png'
import QRActive from '../assets/images/QRActive.png'
import profile from '../assets/images/profile.png'
import profileActive from '../assets/images/profileActive.png'
import delivery from '../assets/images/deliveryIcon.png'
import deliveryActive from '../assets/images/deliveryActive.png'
import Profile from "../components/MainFolder/profile/profile";
import requestOrder from "../components/MainFolder/requestOrder/requestOrder";
import QrCode from "../components/MainFolder/QrCode/qrCode";
const MainNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator  screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#656565',
            tabBarStyle: {
                backgroundColor: '#fff',
                height: 60,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            },
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen name="order" component={requestOrder} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <Image source={homeActive} resizeMode="contain" style={{width: 20, height: 20}}/> : <Image source={homeActive} resizeMode="contain" style={{width: 20, height: 20}}/>}
                        </View>
                    )
                },
                tabBarLabel: 'Заказать',

            }}/>
            <Tab.Screen name="QrCode" component={QrCode} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <Image source={QRActive} resizeMode="contain" style={{width: 20, height: 20}}/> : <Image source={QR} resizeMode="contain" style={{width: 20, height: 20}}/>}
                        </View>
                    )
                },
                tabBarLabel: 'QR',

            }}/>
            <Tab.Screen name="delivery" component={Delivery} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <Image source={deliveryActive} resizeMode="contain" style={{width: 20, height: 20}}/> : <Image source={delivery} resizeMode="contain" style={{width: 20, height: 20}}/>}
                        </View>
                    )
                },
                tabBarLabel: 'Отследить',

            }}/>
            <Tab.Screen name="profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <Image source={profileActive} resizeMode="contain" style={{width: 20, height: 20}}/> : <Image source={profile} resizeMode="contain" style={{width: 20, height: 20}}/>}
                        </View>
                    )
                },
                tabBarLabel: 'Профиль',

            }}/>

        </Tab.Navigator>
    )
}
export default MainNavigator