import api from "../api";

const getAllById = async (id: number) => {
    try {
        const response = await api.get(`/registro/${id}`);
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro}
    }
}

export default {getAllById}