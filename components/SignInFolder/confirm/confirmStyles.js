import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        width: '93%',
        height: 60,
        alignSelf: "center",
        marginTop: 50,
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: "space-between"
    },
    headerButtonImg: {
        width: 9,
        height: 15
    },
    headerButton: {
        width: 39,
        height: 39,
        borderWidth: .4,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    headerLogo: {
      width: 71,
      height: 44
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 20,
        marginTop: 35,
        alignSelf: "center",
    },
    input: {
        width: '15%',
        height: 72,
        borderWidth: .4,
        borderColor: "#000",
        borderRadius: 15,
        textAlign: "center",
        fontSize: 18,
        color: "#000",
    },
    resendButton: {
        marginTop: 20,
        width: '100%'
    },
    resendText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
    },
    form: {
        width: '100%',
        alignSelf: "center",
        marginTop: 56,

    },
    formTitle: {
        fontFamily: 'PBold',
        fontSize: 30,
        width: '90%',
        alignSelf: "center"
    },
    formDesc: {
        fontFamily: 'IRegular',
        fontSize: 16,
        width: '90%',
        color: '#000',
        opacity: 1,
        alignSelf: "center",
    },

});
export default styles;