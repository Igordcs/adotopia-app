import React, {createContext, useState, useEffect, useContext} from 'react'
import { AnimalRequestBodyType, AnimalResponseType, RegistroResponseType } from '../../interfaces/animal';
import animalService from '../../services/animal/animalService';
import { authContext } from '../auth/authContext';
import { router } from 'expo-router';
import { ImagePickerAsset } from 'expo-image-picker';
import registroService from '../../services/registro/registroService';

interface AnimalProps {
    animals: AnimalResponseType[],
    myAnimals: AnimalResponseType[],
    formData: AnimalRequestBodyType,
    registros: RegistroResponseType[],
    handleInputChange: (fieldName: string, fieldValue: any) => void,
    createAnimal(): Promise<void | 'CREATED'>,
    getAllAnimals: () => Promise<'OK' | undefined>,
    getAllAnimalsByEspecie: (especie: string) => Promise<'OK' | undefined>,
    getMyAnimals: () => Promise<'OK' | void>,
    getMyRegistros: () => Promise<'OK' | void>,
}

export const animalContext = createContext<AnimalProps>({} as AnimalProps)

export const AnimalProvider: React.FC<any> = ({children}: any) => {
    const {user} = useContext(authContext);
    const [registros, setRegistros] = useState<RegistroResponseType[]>([]);
    const [animals, setAnimals] = useState<AnimalResponseType[]>([]);
    const [myAnimals, setMyAnimals] = useState<AnimalResponseType[]>([]);
    const [formData, setFormData] = useState<AnimalRequestBodyType>({
        name: '',
        foto: '',
        comportamentos: [],
        vermifugado: false,
        vacinado: false,
        castrado: false,
        especie: '',
        raca: '',
        porte: '',
        descricao: '',
        idade: 0,
    });


    async function getAllAnimals() {
        const response = await animalService.getAll();

        if (response.error)
            return;

        setAnimals(response);
        return 'OK';
    }

    async function getAllAnimalsByEspecie(especie: string) {
        const response = await animalService.getAllByEspecie(especie);

        if (response.error)
            return;

        setAnimals(response);
        return 'OK';
    }

    async function getMyAnimals() {
        if (!user)
            return console.log("Usuario undefined")

        const response = await animalService.getAnimalsByOwnerId(user.id)
        
        if (response.error)
            return;

        setMyAnimals(response.data);
        return 'OK';
    }

    async function getMyRegistros() {
        if (!user)
            return console.log("Usuario undefined")

        const response = await registroService.getAllById(user.id)
        
        if (response.error)
            return;

        setRegistros(response);
        return 'OK';
    }

    async function createAnimal() { 
        if (!user)
            return console.log("Usuario undefined");

        const response = await animalService.createAnimal(formData, user.id);

        if(response.error)
            return console.log(response.error);
        
        router.back();
        return 'CREATED';
    }

    const handleInputChange = (field: string, value: any) => {
        setFormData((prevData) => ({
        ...prevData,
        [field]: value
        }));
    };

    useEffect(() => {
        getAllAnimals();
    }, [])

    return (
        <animalContext.Provider
            value={{
                animals,
                getMyRegistros,
                registros,
                myAnimals,
                getAllAnimals,
                getMyAnimals,
                formData,
                handleInputChange,
                createAnimal,
                getAllAnimalsByEspecie
            }}
        >
            {children}
        </animalContext.Provider>
    )
}