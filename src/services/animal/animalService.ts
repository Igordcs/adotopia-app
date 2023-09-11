import { ImagePickerAsset } from "expo-image-picker";
import { AnimalRequestBodyType, AnimalResponseType } from "../../interfaces/animal";
import api from "../api";

const getAll = async () => {
    try {
        const response = await api.get("/animal/listar")
        return response.data;
    } catch(error: any) {
        console.log(error.response.data.erro);
        return {error: error.response.data.erro}
    }
}

const createAnimal = async (animal: AnimalRequestBodyType, donoId: number) => {
    const {name, comportamentos, foto, vacinado, castrado, especie, raca, porte, descricao, idade} = animal;

    try {
        const {data} = await api.post(`/animal/adicionar/${donoId}`, {
            name, 
            comportamentos, 
            vacinado, 
            castrado, 
            especie, 
            raca, 
            porte, 
            descricao, 
            idade
        })
        return data;
    } catch(error: any) {
        console.log(error.response.data.erro);
        return {error: error.response.data.erro}
    }
}

const getAnimalPhotoById = async (animalId: number) => {
    try {
        const response = await api.get(`/animal/${animalId}/foto`, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error: any) {
        return {error}
    }
}

const saveAnimalImage = async (photo: any, animalId: number) => {
    try {
        const formData = new FormData();
        formData.append('foto', photo);
        return api.post(`/animal/${animalId}/foto`, formData, { headers: { 'content-type': 'multipart/form-data' } });
    } catch (error: any) {
        return {error}
    }
}

const getAnimalsByOwnerId = async (ownerId: number) => {
    try {
        const response = await api.get(`/animal/listar/${ownerId}`)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro};
    }
}

const getAllByEspecie = async (especie: string) => {
    try {
        const response = await api.get(`/animal/listarPorEspecie?especie=${especie}`)
        return response.data;
    } catch (error: any) {
        return {error: error.response.data.erro};
    }
}


export default {getAll, createAnimal, getAnimalsByOwnerId, getAllByEspecie, getAnimalPhotoById}
