import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontFamily: 'IBold',
        fontSize: 20,
        width: '100%',
        textAlign: "center",
        marginTop: 70,
    },
    cardWrapper: {
        width: '94%',
        marginTop: 29,
        height: 172,
        backgroundColor: '#E6EAFF',
        alignSelf: "center",
        borderRadius: 20
    },
    mainDetailsWrapper: {
        width: '95%',
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    firstDate: {
        color: '#161616',
        fontFamily: 'IMedium',
        fontSize: 12
    },
    datesLine: {
        width: 9,
        height: 0,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        alignSelf: "flex-end"
    },
    secondDate: {
        fontFamily: 'IMedium',
        fontSize: 10,
        alignSelf: "flex-end",
        color: '#BBBBBB'
    },
    date: {
        justifyContent: "space-between",
        height: 34,
    },
    detailsList: {
        width: '95%',
        alignSelf: "center",
        height: 40,
        justifyContent: "space-between"
    },
    detail: {
        color: '#757575',
        fontFamily: 'IRegular',
        fontSize: 14,
        lineHeight: 17,
    },
    firstButton: {
        width: '48%',
        height: '100%',
        backgroundColor: '#283891',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    secondButton: {
        width: '48%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    name: {
        fontFamily: 'IMedium',
        fontSize: 18,

    },
    buttonsWrapper: {
        width: '95%',
        flexDirection: "row",
        height: 40,
        alignSelf: "center",
        marginTop: 15,
        justifyContent: "space-between"
    },
    firstButtonText: {
        color: '#fff',
        fontFamily: 'IMedium',

    },
    secondButtonText: {
        color: '#283891',
        fontFamily: 'IMedium',
        fontSize: 14
    }
})
export default styles