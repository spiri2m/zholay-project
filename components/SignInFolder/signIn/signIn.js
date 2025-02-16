import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Platform,
} from "react-native";
import styles from "./signInStyles";
import on from "../../../assets/images/on.png";
import Apple from "../../../assets/images/Apple.png";
import Facebook from "../../../assets/images/faceBook.png";
import Google from "../../../assets/images/Google.png";
import showPass from "../../../assets/images/showPass.png";
import Logo from "../../../assets/images/logo 4x.png";
import { useState } from "react";

const SignIn = ({navigation, route}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const Button = (props) => {
        return (
            <TouchableOpacity style={styles.smButton}>
                <Image
                    source={props.img}
                    resizeMode="contain"
                    style={styles.smButtonImg}
                />
            </TouchableOpacity>
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <Image style={styles.logo} resizeMode="contain" source={Logo} />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.title}>Войти</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <View style={styles.inputC}>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Email"
                                    style={styles.input}
                                />
                                <Image
                                    source={on}
                                    resizeMode="contain"
                                    style={styles.inputImg}
                                />
                            </View>
                        </View>
                        <View style={[styles.inputWrapper, { marginTop: 22 }]}>
                            <Text style={styles.inputTitle}>Пароль</Text>
                            <View style={styles.inputC}>
                                <TextInput
                                    value={pass}
                                    onChangeText={setPass}
                                    placeholder="Пароль"
                                    style={styles.input}
                                    secureTextEntry={true}
                                />
                                <Image
                                    source={showPass}
                                    resizeMode="contain"
                                    style={styles.inputImg}
                                />
                            </View>
                        </View>
                        <View style={styles.forgetWrapper}>
                            <TouchableOpacity>
                                <Text style={styles.forgetTitle}>Забыли пароль?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button}
                                          onPress={() => {
                                              if(email && pass) {
                                                  navigation.navigate('main')
                                              } else {
                                                  Alert.alert('Введите данные!')
                                              }
                                          }}>
                            <Text style={styles.buttonText}>Войти</Text>
                        </TouchableOpacity>
                        <View style={styles.shitContainer}>
                            <View style={styles.line} />
                            <Text style={styles.text}>Войти через</Text>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.smContainer}>
                            <Button img={Facebook} />
                            <Button img={Google} />
                            <Button img={Apple} />
                        </View>
                        <TouchableOpacity style={styles.regTextWrapper}>
                            <Text style={styles.regText}>
                                Нет аккаунта?{" "}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                                <Text style={styles.regButText}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
