import {View, Text, Image, ImageBackground, TouchableOpacity, TextInput} from "react-native";
import styles from "./editProfileStyles";
import {useState} from "react";
import chevronLeft from '../../../assets/images/chevron.left.png'
import guy from '../../../assets/images/guy.png'
import edit from '../../../assets/images/edit.png'
const EditProfile = () => {
    const [name, setName] = useState('Нурхан')
    const [surname, setSurname] = useState('Сейлхан')
    const [email, setEmail] = useState('zholay@gmail.com')
    const [number, setNumber] = useState('+7 777 567 8910')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton}>
                    <Image
                    source={chevronLeft}
                    style={styles.headerButtonImg}
                    resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    Редактировать
                </Text>
                <View style={[styles.headerButton, {opacity: 0}]}>

                </View>
            </View>
            <ImageBackground
            source={guy}
            style={styles.userPfp}
            resizeMode="contain"
            >
            <TouchableOpacity style={styles.editButton}>
                <Image
                source={edit}
                style={styles.editButtonImg}
                resizeMode="contain"
                />
            </TouchableOpacity>
            </ImageBackground>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        Имя
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <View style={styles.inputLine}/>
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        Фамилия
                    </Text>
                    <TextInput
                        value={surname}
                        onChangeText={setSurname}
                        style={styles.input}
                    />
                    <View style={styles.inputLine}/>
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        Email
                    </Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <View style={styles.inputLine}/>
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputTitle}>
                        Номер телефона
                    </Text>
                    <TextInput
                        value={number}
                        onChangeText={setNumber}
                        style={styles.input}
                    />
                    <View style={styles.inputLine}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Сохранить
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default EditProfile