import api from "../api";

const createChat = async (remetenteId: number, destinatarioId: number) => {
    try {
        const response = await api.post(`/chat/${remetenteId}/${destinatarioId}`)
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro}
    }
}

const getAll = async (remetenteId: number) => {
    try {
        const response = await api.get(`/chat/listar/${remetenteId}`)
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro};
    }
}

export default {createChat, getAll}