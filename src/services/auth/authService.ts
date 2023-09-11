import { UsuarioRegisterType } from "../../interfaces/auth";
import api from "../api";

const register = async (usuario: UsuarioRegisterType) => {
    try {
        const response = await api.post("/usuario", {nome: usuario.nome, telefone: usuario.telefone, email: usuario.email, endereco: usuario.endereco, descricao: usuario.descricao})
        console.log(response.data);
        return response.data;
    } catch(error: any) {
        return {error: error.response.data.erro}
    }
}

const signIn = async (email: string) => {
    try {
        const response = await api.get(`/usuario/entrar?email=${email}`);
        console.log("axiosResponse: ", response.data)
        return response.data;
    } catch(error: any) {
        return {error: error.response.data.erro}
    }
}

const adotar = async (petId: number, userId: number) => {
    try {
        const response = await api.post(`/usuario/adotar/${userId}/${petId}`)
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro}
    }
}

export default {register, signIn, adotar}
