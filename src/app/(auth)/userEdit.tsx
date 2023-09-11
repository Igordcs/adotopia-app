import {View, StyleSheet, Pressable, Text} from 'react-native';
import {useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormTextInput } from '../../components/Form/FormTextInput';
import { FormLabel } from '../../components/Form/FormLabel';
import { authContext } from '../../contexts/auth/authContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

export default function userEdit() {
    const {formData, handleInputChange} = useContext(authContext) 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Pressable onPress={() => router.replace("/(tabs)/perfil")}>
                    <MaterialCommunityIcons name='chevron-left' size={24} color={Colors.default.black} />
                </Pressable>
                <FormLabel text="Nome" />
                <FormTextInput labelNome="name" inputPlaceHolder="Digite seu nome" value={formData.name} setStateValue={handleInputChange}  />
                <FormLabel text="Senha" />
                <FormTextInput labelNome="senha" inputPlaceHolder="Digite seu senha" value={formData.senha} setStateValue={handleInputChange} secureTextEntry />
                <FormLabel text="Email" />
                <FormTextInput labelNome="email" inputPlaceHolder="Digite seu email" value={formData.email} setStateValue={handleInputChange} />
                <FormLabel text="Telefone" />
                <FormTextInput labelNome="telefone" inputPlaceHolder="Digite seu telefone" value={formData.telefone} setStateValue={handleInputChange} keyboardType="numeric" />
                <FormLabel text="CEP"/>
                <FormTextInput labelNome="cep" inputPlaceHolder="Digite seu CEP" value={formData.cep} setStateValue={handleInputChange} />
                <FormLabel text="Bairro"/>
                <FormTextInput labelNome="bairro" inputPlaceHolder="Digite seu Bairro" value={formData.bairro} setStateValue={handleInputChange} />
                <FormLabel text="Logradouro"/>
                <FormTextInput labelNome="logradouro" inputPlaceHolder="Digite seu logradouro" value={formData.logradouro} setStateValue={handleInputChange} />
                <FormLabel text="Complemento"/>
                <FormTextInput labelNome="complemento" inputPlaceHolder="Digite seu Complemento" value={formData.complemento} setStateValue={handleInputChange} />
            
                <Pressable style={styles.atualizarButton}>
                    <Text>Atualizar</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: Colors.default.white
    },
    atualizarButton: {
        width: '60%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 12, 
        borderRadius: 4, 
        borderWidth: 2, 
        borderColor: Colors.default.primary, 
        marginTop: 12,
        marginBottom: 32,
        alignSelf: 'center'
    }
})