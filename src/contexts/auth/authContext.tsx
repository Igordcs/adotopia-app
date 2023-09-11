import React, {createContext, useState} from 'react'
import { UsuarioRegisterType, UsuarioResponseType } from '../../interfaces/auth'
import { Alert } from 'react-native';
import authService from '../../services/auth/authService';
import { router } from 'expo-router';

interface AuthProps {
    user: UsuarioResponseType | null;
    register: () => Promise<'CREATED' | undefined>;
    signIn: () => Promise<'OK' | undefined>
    formData: {
      name: string;
      email: string;
      senha: string;
      telefone: string;
      cep: string;
      logradouro: string;
      bairro: string;
      uf: string;
      descricao: string;
      complemento: string;
      numero: string
    },
    adotar(petId: number): Promise<'OK' | void>,
    handleInputChange: (fieldName: string, fieldValue: string) => void,
  }

export const authContext = createContext<AuthProps>({} as AuthProps)

export const AuthProvider: React.FC<any> = ({children}: any) => {
    const [user, setUser] = useState<UsuarioResponseType | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        name: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        uf: '',
        descricao: '',
        numero: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevData) => ({
        ...prevData,
        [field]: value
        }));
    };

    async function signIn() {
        const response = await authService.signIn(formData.email);
        if (response.error)
            return Alert.alert("Email ou senha incorreto!");

        setUser(response);
        router.push("/onboarding/")
        return 'OK';
    }

    async function register() {
        const hasError = validateFormFields();

        if(hasError)
            return;

        const user: UsuarioRegisterType = {
            nome: formData.name,
            email: formData.email,
            telefone: formData.telefone,
            descricao: formData.descricao,
            endereco: {
                bairro: formData.bairro,
                numero: formData.numero,
                uf: formData.uf,
                complemento: formData.complemento,
                logradouro: formData.complemento,
                cep: formData.cep,
            }
        };

        const data = await authService.register(user);
        if(data.error)
            return;

        resetFormData();
        router.push("/onboarding/");

        return 'CREATED';
    }

    async function adotar(petId: number) {
        if (!user)
            return console.log("Usuario undefined");

        const data = await authService.adotar(petId, user.id);

        if(data.error)
            return;

        return 'OK'
    }

    function resetFormData() {
        setFormData({
            email: '',
            senha: '',
            name: '',
            telefone: '',
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            uf: '',
            descricao: '',
            numero: ''
        })
    }

    function validateFormFields() {

        if(formData.name.length < 3 || formData.name.length > 255) {
          Alert.alert('Seu nome deve ter entre 3 e 255 letras.');
          return true
        }
        if(formData.email.length < 3 || formData.email.length > 255) {
            Alert.alert('Seu email deve ser válido e 255 letras.');
            return true
          }
    
        return false
      }

    return (
        <authContext.Provider
            value={{
                user,
                register,
                signIn,
                formData,
                handleInputChange,
                adotar
            }}
        >
            {children}
        </authContext.Provider>
    )
}