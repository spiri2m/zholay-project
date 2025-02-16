import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoWrapper: {
        marginTop: 132,
        alignSelf: "center",
    },
    logo: {
        width: 280,
        height: 180
    },
    form: {
        marginTop: 38,
        width: '100%',
    },
    formTitle: {
        color: '#000',
        fontFamily: 'PBold',
        fontSize: 30,
        textAlign: "center",
        marginBottom: 30,
    },
    inputWrapper: {
        width: '95%',
        height: 60,
        borderWidth: .4,
        alignSelf: "center",
        borderRadius: 10,
        paddingLeft: 16,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        fontSize: 16,
        fontFamily: 'IRegular',
        width: '90%',
    },
    button: {
        width: 66,
        height: 66,
        backgroundColor: '#000',
        marginTop: 30,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    smWrapper: {
        marginTop: 48,
        width: 140,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignSelf: "center",
    },
    mButton: {
       width: 40,
       height: 40,
       borderRadius: 50,
       borderWidth: .4,
       alignItems: "center",
       justifyContent: "center",

    },
    mButtonImage: {
        width: 20,
        height: 20,
    },
})
export default styles
