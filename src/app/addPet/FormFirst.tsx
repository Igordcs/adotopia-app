import {useContext} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { FormTextInput } from '../../components/Form/FormTextInput';
import { FormSelectInput } from '../../components/Form/FormSelectInput';
import Colors from '../../constants/Colors';
import { animalContext } from '../../contexts/animal/animalContext';
import { FormLabel } from '../../components/Form/FormLabel';
import { racasMapping } from '../../util/racas';

export function FormFirst() {
    const {formData, handleInputChange} = useContext(animalContext);

    const especies = [
        { id: 1, labelName: 'Cachorro', labelValue: 'CACHORRO' },
        { id: 2, labelName: 'Gato', labelValue: 'GATO' },
        { id: 3, labelName: 'Coelho', labelValue: 'COELHO' },
    ];
    const racas = racasMapping[formData.especie]

    return (
        <>
            <SafeAreaView style={{flex: 0.8}}>
                <FormLabel text='Nome' />
                <FormTextInput labelNome='name' inputPlaceHolder='Nome do pet' value={formData.name} setStateValue={handleInputChange}/>
                <FormLabel text='Idade' />
                <FormTextInput labelNome='idade' inputPlaceHolder='Idade do pet' value={String(formData.idade)} setStateValue={handleInputChange} keyboardType='numeric' />
                <FormSelectInput text="Selecione uma especie" options={especies} formLabel="especie" onChangeSelect={handleInputChange} label="Selecionar a especie" />
                <FormSelectInput text="Selecione uma raça" options={racas} formLabel="raca" onChangeSelect={handleInputChange} label="Selecionar a raça" />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: Colors.default.primary,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})