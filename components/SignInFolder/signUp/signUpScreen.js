import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import styles from "./signUpStyles";
import { useState } from "react";
import right from "../../../assets/images/right.png";
import showPass from "../../../assets/images/showPass.png";
import Logo from "../../../assets/images/logo 4x.png";
import apple from "../../../assets/images/Apple.png";
import facebook from "../../../assets/images/faceBook.png";
import google from "../../../assets/images/Google.png";

const SignUpScreen = ({navigation, route}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const Button = (props) => {
        return (
            <TouchableOpacity style={styles.mButton}>
                <Image
                    style={styles.mButtonImage}
                    resizeMode="cover"
                    source={props.img}
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
                    <View style={styles.logoWrapper}>
                        <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formTitle}>Создать аккаунт</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={email}
                                style={styles.input}
                                placeholder={"Email"}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={pass}
                                style={styles.input}
                                placeholder={"Пароль"}
                                onChangeText={setPass}
                                secureTextEntry={true}
                            />
                            <Image
                                source={showPass}
                                style={{ width: 20, height: 20, marginRight: 18 }}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={pass2}
                                style={styles.input}
                                placeholder={"Повторите пароль"}
                                onChangeText={setPass2}
                                secureTextEntry={true}
                            />
                            <Image
                                source={showPass}
                                style={{ width: 20, height: 20, marginRight: 18 }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signUpTwo')}>
                        <Image
                            source={right}
                            style={{ width: 9, height: 18 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.smWrapper}>
                        <Button img={facebook} />
                        <Button img={google} />
                        <Button img={apple} />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;
