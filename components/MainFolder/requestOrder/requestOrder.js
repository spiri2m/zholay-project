import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native'
import addImage from '../../../assets/images/addImage.png'
import styles from "./requestOrderStyles";
import {useState} from "react";
const RequestOrder = () => {
    const [val, setVal] = useState('')
    const [size, setSize] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerTitle}>
                    Заявка на заказ
                </Text>
            </View>
            <View style={styles.form}>
                <View style={styles.attachWrapper}>
                    <Text style={styles.attachText}>
                        Прикрепите фото
                    </Text>
                    <TouchableOpacity style={styles.attach}>
                        <Image
                        style={styles.attachImg}
                        source={addImage}
                        resizeMode="contain"
                        />
                        <Text style={styles.attachContentText}>
                            Нажмите чтобы добавить фото посылки
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.descTitle}>
                        Опишите посылку
                    </Text>
                    <TextInput
                    style={styles.descInput}
                    value={val}
                    onChangeText={setVal}
                    placeholder="Гитара..."
                    />
                </View>
                <View style={styles.sizeWrapper}>
                    <Text style={styles.sizeTitle}>
                        Выберите размер
                    </Text>
                    <View style={styles.sizes}>
                        <TouchableOpacity style={[styles.sizeButton, styles.selectedButton(size == 'small')]} onPress={() => setSize('small')}>
                            <Text style={[styles.sizeButtonText, styles.selectedText(size == 'small')]}>
                                Маленький
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sizeButton, styles.selectedButton(size == 'medium')]} onPress={() => setSize('medium')}>
                            <Text style={[styles.sizeButtonText, styles.selectedText(size == 'medium')]}>
                                Средний
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sizeButton, styles.selectedButton(size == 'big')]} onPress={() => setSize('big')}>
                            <Text style={[styles.sizeButtonText, styles.selectedText(size == 'big')]}>
                                Большой
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>
                        Готово
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RequestOrder