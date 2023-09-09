import {Platform, StatusBar, StyleSheet} from "react-native"
import Colors from "./Colors"

export const stylized = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.default.white,
        paddingHorizontal: 12,
        paddingTop: Platform.OS === 'ios' ? 55 : StatusBar.currentHeight,
    },
    titleSemiBold: { 
        fontSize: 18, 
        color: Colors.default.black, 
        fontWeight: '600', 
        fontFamily: 'Lexend_600SemiBold'
    },
    titleGreyRegular: {
        fontSize: 14, 
        color: Colors.default.textGrey, 
        fontFamily: 'Lexend_400Regular'
    },
    titleDescription: {
        fontSize: 14,
        color: Colors.default.black,
        fontFamily: 'Lexend_400Regular',
    },
    titleMessage: {
        fontSize: 16,
        color: Colors.default.black,
        fontFamily: 'Lexend_400Regular',
    },
    messageContent: {
        fontSize: 12,
        color: Colors.default.black,
        fontFamily: 'Lexend_400Regular',
    },
    perfilName: {
        fontSize: 24,
        color: Colors.default.black, 
        fontWeight: '600', 
        fontFamily: 'Lexend_600SemiBold',
        textAlign: 'center'
    },
    perfilAge: {
        fontSize: 14,
        color: Colors.default.textGrey,
        fontFamily: 'Lexend_400Regular',
        textAlign: 'center'
    },
    editButtonText: {
        fontSize: 14,
        color: Colors.default.primary,
        fontWeight: '600', 
        fontFamily: 'Lexend_600SemiBold',
    },
    ownerPetDescription: {
        fontSize: 14,
        fontWeight: '500', 
        fontFamily: 'Lexend_500Medium',
        flexShrink: 1
    },
    chatMessageContent: {
        fontSize: 13,
        color: Colors.default.black,
        fontFamily: 'Lexend_500Medium',
    },
})