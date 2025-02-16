import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './confirmStyles'
import Logo from '../../../assets/images/logo 4x.png'
import chevron from '../../../assets/images/chevron.left.png'
const Confirm = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const inputRefs = [];

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            inputRefs[index + 1]?.focus();
        }
    };

    const handleBackspace = (key, index) => {
        if (key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton}>
                    <Image
                    style={styles.headerButtonImg}
                    source={chevron}
                    resizeMode="contain"
                    />
                </TouchableOpacity>
                <Image
                style={styles.headerLogo}
                resizeMode="contain"
                source={Logo}
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.formTitle}>
                    Введите код
                </Text>
                    <Text style={styles.formDesc}>
                        Мы отправили код активаций на ваш номер {' '} <Text style={styles.formDesc}>
                        +7 777 567 8910
                    </Text>
                    </Text>
            <View style={styles.inputContainer}>
                {otp.map((_, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs[index] = ref)}
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={otp[index]}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={({ nativeEvent: { key } }) => handleBackspace(key, index)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.resendButton} disabled>
                <Text style={styles.resendText}>Отправить код повторно 00:20</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};
export default Confirm