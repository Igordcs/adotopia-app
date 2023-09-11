import { SafeAreaView } from "react-native-safe-area-context"
import {KeyboardAvoidingView, Platform} from 'react-native';
import { FormTextInput } from "../Form/FormTextInput"
import { useContext } from "react"
import { authContext } from "../../contexts/auth/authContext";
import { FormLabel } from "../Form/FormLabel";

export const FormRegisterSecond = () => {
    const {formData, handleInputChange} = useContext(authContext);

    return (
        <KeyboardAvoidingView  style={{flex: 1}}>
            <FormLabel text="CEP"/>
            <FormTextInput labelNome="cep" inputPlaceHolder="Digite seu CEP" value={formData.cep} setStateValue={handleInputChange} />
            <FormLabel text="Bairro"/>
            <FormTextInput labelNome="bairro" inputPlaceHolder="Digite seu Bairro" value={formData.bairro} setStateValue={handleInputChange} />
            <FormLabel text="Logradouro"/>
            <FormTextInput labelNome="logradouro" inputPlaceHolder="Digite seu logradouro" value={formData.logradouro} setStateValue={handleInputChange} />
            <FormLabel text="Complemento"/>
            <FormTextInput labelNome="complemento" inputPlaceHolder="Digite seu Complemento" value={formData.complemento} setStateValue={handleInputChange} />
        </KeyboardAvoidingView >
    )
}