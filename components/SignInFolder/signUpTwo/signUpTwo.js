import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";
import Logo from "../../../assets/images/logo 4x.png";
import on from "../../../assets/images/on.png";
import styles from "./signUpTwoStyles";
import { useState } from "react";

const SignUpTwo = ({navigation, route}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");

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
                        <Image
                            style={styles.logo}
                            resizeMode="contain"
                            source={Logo}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formTitle}>Ваши данные</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputText}>Имя</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Имя"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputText}>Фамилия</Text>
                            <TextInput
                                style={styles.input}
                                value={surname}
                                onChangeText={setSurname}
                                placeholder="Фамилия"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputText}>Номер телефона</Text>
                            <TextInput
                                style={styles.input}
                                value={number}
                                onChangeText={setNumber}
                                placeholder="Номер телефона"
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>
                    <View style={styles.check}>
                        <TouchableOpacity style={styles.checkboxWrapper}>
                            <Image
                                source={on}
                                resizeMode="contain"
                                style={styles.checkboxImg}
                            />
                        </TouchableOpacity>
                        <Text style={styles.checkText}>
                            Принимаю{" "}
                            <Text style={[styles.checkText, { color: "#1F00A7" }]}>
                                политику конфиденциальности
                            </Text>
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('confirm')}>
                        <Text style={styles.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignUpTwo;
