import {View, Text, Image, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/images/logo 4x.png'
import styles from "./firstScreenStyles";

const FirstScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleBig}>
                        Давайте начнем
                    </Text>
                    <Text style={styles.titleMini}>
                        Теперь можете не беспокоится за ваши посылки)
                    </Text>
                </View>
                <TouchableOpacity style={[styles.buttonWrapper, {backgroundColor: '#000'}]} onPress={() => navigation.navigate('signIn')}>
                    <Text style={styles.buttonText}>
                        Войти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => navigation.navigate('signUp')}>
                    <Text style={[styles.buttonText, {color: '#000', fontFamily: 'IBold'}]}>
                        Создать аккаунт
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default FirstScreen