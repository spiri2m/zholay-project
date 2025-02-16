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
        marginTop: 71,
        alignSelf: "center",
    },
    title: {
        fontSize: 30,
        fontFamily: 'PBold'
    },
    inputWrapper: {
        width: '100%',
        marginTop: 38,
        height: 80,
    },
    inputTitle: {
        fontSize: 14,
        fontFamily: 'IRegular'
    },
    inputC: {
        flexDirection: "row",
        width: '100%',
        height: 56,
        marginTop: 6,
        borderWidth: .4,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    input: {
        width: '90%',
        fontFamily: 'IRegular',
        fontSize: 16
    },
    inputImg: {
        width: 20,
        height: 20
    },
    forgetWrapper: {
        width: '100%',
        height: 20,
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 6,
        marginBottom: 38
    },
    forgetTitle: {
        fontFamily: 'IRegular',
        fontSize: 14,
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 38
    },
    buttonText: {
        fontFamily: 'IBold',
        fontSize: 16,
        color: '#fff'
    },
    shitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#C0C0C0',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#000',
        fontFamily: 'IRegular'
    },
    smContainer: {
        width: '100%',
        height: 56,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 22
    },
    smButton: {
        width: '30%',
        height: 56,
        borderWidth: .4,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    smButtonImg: {
        width: 20,
        height: 20,
    },
    regText: {
        textAlign: "center",
        fontFamily: 'IRegular',
        fontSize: 14
    },
    regButText: {
        fontFamily: 'IBold',
        fontSize: 14
    },
    regTextWrapper: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 18,
        flexDirection: "row",
    }
})
export default styles