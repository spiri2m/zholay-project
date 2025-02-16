import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: '100%',
        height: 45,
        marginTop: 80,
        paddingRight: 25,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    logo: {
        width: 71,
        height: 44
    },
    form: {
        width: '93%',
        alignSelf: "center",
        marginTop: 85
    },
    formTitle: {
        fontFamily: 'PBold',
        fontSize: 30
    },
    inputWrapper: {
        width: '100%',
        height: 80,
        marginBottom: 17,
    },
    inputText: {
        fontFamily: 'IRegular',
        fontSize: 14
    },
    input: {
        width: '100%',
        height: 56,
        borderWidth: .4,
        borderRadius: 10,
        paddingLeft: 16,
        marginTop: 6,
        fontFamily: 'IRegular',
        fontSize: 16,
    },
    check: {
        width: '93%',
        alignSelf: "center",
        marginTop: 43,
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxWrapper: {
        width: 20,
        height: 20,
        borderRadius: 50
    },
    checkboxImg: {
        width: '100%',
        height: '100%',
    },
    checkText: {
        marginLeft: 12,
        fontFamily: 'IRegular',
        fontSize: 14,
    },
    button: {
        marginTop: 24,
        width: '93%',
        height: 56,
        alignSelf: "center",
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'IBold',
        fontSize: 16
    }
})
export default styles