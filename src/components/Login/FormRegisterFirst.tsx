import {KeyboardAvoidingView} from 'react-native';
import { FormTextInput } from "../Form/FormTextInput"
import { authContext } from "../../contexts/auth/authContext"
import { useContext } from "react"
import { FormLabel } from "../Form/FormLabel"

export const FormRegisterFirst = () => {
    const {formData, handleInputChange} = useContext(authContext);
    
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <FormLabel text="Nome" />
            <FormTextInput labelNome="name" inputPlaceHolder="Digite seu nome" value={formData.name} setStateValue={handleInputChange}  />
            <FormLabel text="Senha" />
            <FormTextInput labelNome="senha" inputPlaceHolder="Digite seu senha" value={formData.senha} setStateValue={handleInputChange} secureTextEntry />
            <FormLabel text="email" />
            <FormTextInput labelNome="email" inputPlaceHolder="Digite seu email" value={formData.email} setStateValue={handleInputChange} />
            <FormLabel text="Telefone" />
            <FormTextInput labelNome="telefone" inputPlaceHolder="Digite seu telefone" value={formData.telefone} setStateValue={handleInputChange} keyboardType="numeric" />
        </KeyboardAvoidingView>
    )
}