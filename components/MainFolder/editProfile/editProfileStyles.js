import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        marginTop: 60,
        width: '94%',
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerButton: {
        width: 45,
        height: 45,
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    headerButtonImg: {
        width: 20,
        height: 20,
    },
    headerTitle: {
        fontFamily: 'IBold',
        fontSize: 20,
    },
    userPfp: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    editButton: {
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000',
        borderRadius: 10,
    },
    editButtonImg: {
        width: 11,
        height: 11
    },
    form: {
        width: '94%',
        alignSelf: "center",
        marginTop: 30,
    },
    inputWrapper: {
        width: '100%',
        marginTop: 25
    },
    input: {
        padding: 0,
        fontFamily: 'IMedium',
        fontSize: 16,
    },
    inputTitle: {
        color: '#757575',
        fontSize: 12,
        fontFamily: 'IRegular'
    },
    inputLine: {
        width: '100%',
        backgroundColor: '#EBEBEB',
        height: 2,
        marginTop: 6
    },
    button: {
        width: '100%',
        marginTop: 250,
        height: 47,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'IBold',
        fontSize: 16,
        color: '#fff'
    }
})
export default styles