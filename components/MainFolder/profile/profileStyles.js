import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontFamily: 'IBold',
        fontSize: 20,
        marginTop: 70,
        textAlign: "center",
    },
    main: {
        marginTop: 57,
        width: '100%',
        alignSelf: "center",
    },
    user: {
        width: '92%',
        alignSelf: "center",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    userPfp: {
        width: 80,
        height: 80,
    },
    userDetails: {
        width: '65%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    userName: {
        fontFamily: 'IBold',
        fontSize: 18,
    },
    userNum: {
        fontSize: 14,
        fontFamily: 'IRegular'
    },
    editButton: {
        width: 45,
        height: 45,
        borderRadius: 15,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: "center",
    },
    editButtonImg: {
        width: 20,
        height: 20,
    },
    line: {
        marginTop: 17,
        width: '100%',
        height: 1,
        backgroundColor: '#EBEBEB'
    },
    cardWrapper: {
        width: '92%',
        alignSelf: "center",
        marginTop: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardImg: {
        width: 20,
        height: 20,
    },
    cardData: {
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    cardText: {
        fontFamily: 'IRegular',
        fontSize: 16,
        textAlign: "center",
    },
    cardChevron: {
        width: 16,
        height: 16
    },
    quitButton: {
        width: '60%',
        height: 45,
        backgroundColor: '#000',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 220
    },
    quitButtonImg: {
        width: 20,
        height: 22,
    },
    quitButtonText: {
        fontFamily: 'IRegular',
        fontSize: 13,
        color: '#EDEDED',
        marginLeft: 6,
    }
})
export default styles