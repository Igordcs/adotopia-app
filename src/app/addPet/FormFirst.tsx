import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View, Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import { stylized } from '../../constants/styles';
import { FormTextInput } from '../../components/Form/FormTextInput';
import { FormSelectInput } from '../../components/Form/FormSelectInput';
import Colors from '../../constants/Colors';

export function FormFirst() {
    const especies = [
        { id: 1, labelName: 'Cachorro', labelValue: 'cachorro' },
        { id: 2, labelName: 'Gato', labelValue: 'gato' },
        { id: 3, labelName: 'Coelho', labelValue: 'coelho' },
        { id: 4, labelName: 'Hamster', labelValue: 'hamster' },
        { id: 5, labelName: 'Peixe', labelValue: 'peixe' }
    ];

    const racas = [
        { id: 1, labelName: 'pitbull', labelValue: 'pitbull' },
        { id: 2, labelName: 'pitbull', labelValue: 'pitbull' },
        { id: 3, labelName: 'pitbull', labelValue: 'pitbull' },
        { id: 4, labelName: 'pitbull', labelValue: 'pitbull' },
        { id: 5, labelName: 'pitbull', labelValue: 'pitbull' }
    ];

    const porte = [
        { id: 1, labelName: 'Pequeno', labelValue: 'Pequeno' },
        { id: 2, labelName: 'Medio', labelValue: 'Medio' },
        { id: 3, labelName: 'Grande', labelValue: 'Grande' },
    ];

    const trueOrFalse = [
        { id: 1, labelName: 'Sim', labelValue: true },
        { id: 2, labelName: 'Não', labelValue: false },
    ];

    return (
        <>
            <SafeAreaView style={{flex: 0.8}}>
                <FormTextInput labelNome='Nome' inputPlaceHolder='Nome do pet' />
                <FormTextInput labelNome='Idade' inputPlaceHolder='Idade do pet' />
                <FormSelectInput text="Selecione uma especie" options={especies} onChangeSelect={(id: any) => console.log(id)} label="Selecionar a especie" />
                <FormSelectInput text="Selecione uma raça" options={racas} onChangeSelect={(id: any) => console.log(id)} label="Selecionar a raça" />
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