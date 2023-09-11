import { MensagemRequestType } from "../../interfaces/mensagem";
import api from "../api";

const enviarMensagem = async (chatId: number, remetenteId: number, mensagem: MensagemRequestType) => {
    const {conteudoMsg, data} = mensagem
    try {
        const response = await api.post(`/mensagem/enviar/${chatId}/${remetenteId}`, {
            conteudoMsg,
            data
        })
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro}
    } 
}

export default {enviarMensagem}