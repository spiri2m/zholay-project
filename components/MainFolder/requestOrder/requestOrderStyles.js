import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerWrapper: {
        borderBottomWidth: .3,
        marginTop: 60,
        paddingBottom: 13,
        alignItems: "center",
    },
    headerTitle: {
        fontFamily: 'IBold',
        fontSize: 20,
    },
    form: {
        width: '90%',
        height: 400,
        marginTop: 37,
        alignSelf: "center"
    },
    attachWrapper: {
        width: '100%',

    },
    attachText: {
        fontFamily: 'IMedium',
        fontSize: 15,
        height: 24,

    },
    attach: {
        width: '100%',
        height: 180,
        borderWidth: .4,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    attachImg: {
        width: 30,
        height: 30,
    },
    attachContentText: {
        fontSize: 8,
        fontFamily: 'IMedium',
        lineHeight: 24,
        color: '#818181'
    },
    descWrapper: {
        marginTop: 18,
        width: '100%',
        height: 75,
    },
    descTitle: {
        fontFamily: 'IMedium',
        fontSize: 15,
        lineHeight: 24,
    },
    descInput: {
        borderWidth: .4,
        height: 50,
        width: '100%',
        borderRadius: 8,
        padding: 10,
        fontFamily: 'IRegular',
        fontSize: 13,
    },
    sizeWrapper: {
        width: '100%',
        height: 80,
        marginTop: 20,

    },
    sizeTitle: {
        lineHeight: 24,
        fontFamily: 'IMedium',
        fontSize: 15
    },
    sizes: {
        width: '100%',
        height: 32,
        borderRadius: 34,
        borderWidth: 1,
        borderColor: '#E1E6EF',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    sizeButton: {
        paddingVertical: 5,
        paddingHorizontal: 22,
        alignItems: "center",
        justifyContent: "center",
        width: '32.5%',
        borderRadius: 100
    },
    sizeButtonText: {
        fontFamily: 'IMedium',
        fontSize: 11,
        lineHeight: 18,
    },
    selectedButton: (selected) => ({
        backgroundColor: selected ? '#363543' : '#fff'
    }),
    selectedText: (selected) => ({
        color: selected ? '#fff' : '#000',
        fontFamily: selected ? 'IBold' : 'IMedium'
    }),
    buttonWrapper: {
        marginTop: 200,
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        color: '#fff',
        fontFamily: 'IMedium',
        fontSize: 16
    }
})

export default styles