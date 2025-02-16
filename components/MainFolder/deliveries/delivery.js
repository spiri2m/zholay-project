import {View, Text, TouchableOpacity} from 'react-native'
import styles from "./deliveryStyles";
const Delivery = () => {
    const Card = (props) => {
        return (
            <View style={styles.cardWrapper}>
                <View style={styles.mainDetailsWrapper}>
                    <Text style={styles.name}>
                        Гитара
                    </Text>
                    <View style={styles.date}>
                        <Text style={styles.firstDate}>
                            26.12.2024
                        </Text>
                        <View style={styles.datesLine}/>
                        <Text style={styles.secondDate}>
                            27.12.24
                        </Text>
                    </View>
                </View>
                <View style={styles.detailsList}>
                    <Text style={styles.detail}>
                        {'\u2022 Zharim'}
                    </Text>
                    <Text style={styles.detail}>
                        {'\u2022 Средний размер'}
                    </Text>
                </View>
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity style={styles.firstButton}>
                        <Text style={styles.firstButtonText}>
                            На карте
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondButton}>
                        <Text style={styles.secondButtonText}>
                            Детали
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ваши посылки
            </Text>
            <Card/>
        </View>
    )
}
export default Delivery