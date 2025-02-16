import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoWrapper: {
        marginTop: 140,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 115
    },
    logo: {
        width: 280,
        height: 180,
    },
    contentWrapper: {
        alignItems: "center"
    },
    titleWrapper: {
        width: '100%',
        marginBottom: 80,
    },
    titleBig: {
        color:'#000',
        fontFamily: 'PBold',
        fontSize: 32,
        alignSelf: "center",
    },
    titleMini: {
        fontSize: 18,
        textAlign: "center",
        opacity: 0.7,
        fontFamily: 'ILight',
        width: '80%',
        alignSelf: "center",
    },
    buttonWrapper: {
        width: '95%',
        height: 60,
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        color: '#fff',
        marginBottom: 10
    },
    buttonText: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: 'IBold',
        fontSize: 16,
        color: '#fff',
    }
})
export default styles