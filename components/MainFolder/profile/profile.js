import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import guy from '../../../assets/images/guy.png'
import edit from '../../../assets/images/edit.png'
import location from '../../../assets/images/location.png'
import payment from '../../../assets/images/payment.png'
import delivery from '../../../assets/images/delivery.png'
import quit from '../../../assets/images/quit.png'
import settings from '../../../assets/images/settings.png'
import about from '../../../assets/images/logo 4x.png'
import chevron_right from '../../../assets/images/chevron.right.png'
import styles from './profileStyles'
const Profile = () => {
    const Card = (props) => {
        const d = props.data
        return (
            <TouchableOpacity style={styles.cardWrapper}>
                <Image
                    source={d.img}
                    style={styles.cardImg}
                    resizeMode="contain"
                />
                <View style={styles.cardData}>
                    <Text style={styles.cardText}>
                        {d.text}
                    </Text>
                    <Text>
                        <Image
                            source={chevron_right}
                            resizeMode="contain"
                            style={styles.cardChevron}
                        />
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    const data = [
        {
            id: 0,
            img: location,
            text: 'Адрес'
        },
        {
            id: 1,
            img: payment,
            text: 'Способы оплаты'
        },
        {
            id: 2,
            img: delivery,
            text: 'Мои заказы'
        },
        {
            id: 3,
            img: settings,
            text: 'Настройки'
        },
        {
            id: 4,
            img: about,
            text: 'Про ZholAy'
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Профиль
            </Text>
            <View style={styles.main}>
                <View style={styles.user}>
                    <View style={styles.userDetails}>
                        <Image
                            source={guy}
                            resizeMode="contain"
                            style={styles.userPfp}
                        />
                        <View style={styles.userData}>
                            <Text style={styles.userName}>
                                Сейлхан Нурхан
                            </Text>
                            <Text style={styles.userNum}>
                                +7 777 567 8910
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Image
                        source={edit}
                        resizeMode="contain"
                        style={styles.editButtonImg}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <FlatList
                    data={data}
                    renderItem={(item) => {
                        return (
                            <Card data={item.item} key={item.id}/>
                        )
                    }}
                />
                <TouchableOpacity style={styles.quitButton}>
                    <Image
                    source={quit}
                    style={styles.quitButtonImg}
                    resizeMode="contain"
                    />
                    <Text style={styles.quitButtonText}>
                        Выйти
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile