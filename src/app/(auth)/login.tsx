import { SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Pressable, Text, Dimensions} from 'react-native'
import Colors from "../../constants/Colors";
import { FormTextInput } from "../../components/Form/FormTextInput";
import { router } from "expo-router";
import { Header } from "../../components/Login/Header";
import { useContext, useState } from "react";
import { authContext } from "../../contexts/auth/authContext";
import { FormLabel } from "../../components/Form/FormLabel";

export default function Login() {
    const {signIn, formData, handleInputChange} = useContext(authContext);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.default.white}}>
            <Header title="Login" />

            <SafeAreaView style={styles.mainContainer}>
                <FormLabel text="Email" />
                <FormTextInput labelNome="email" inputPlaceHolder="Digite seu email" value={formData.email} setStateValue={handleInputChange} />
                <FormLabel text="Senha" />
                <FormTextInput labelNome="senha" inputPlaceHolder="Digite sua senha" value={formData.senha} setStateValue={handleInputChange} secureTextEntry />
                <Pressable style={styles.loginButton} onPress={signIn}>
                    <Text style={styles.buttonText}>Fazer login</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        paddingHorizontal: 12,
        flex: 1,
    },
    loginButton: {
      width: Dimensions.get('window').width / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.default.primary,
      padding: 16,
      borderRadius: 6,
      marginTop: 16,
      alignSelf: 'center'
    },
    buttonText: {
      color: Colors.default.white,
      fontSize: 16
    }
})