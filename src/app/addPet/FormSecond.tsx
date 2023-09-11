import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useContext, useState} from 'react';
import { ComportamentoButton } from '../../components/Form/comportamentoButton';
import { FormTrueOrFalse } from '../../components/Form/FormTrueOrFalse';
import { animalContext } from '../../contexts/animal/animalContext';

export function FormSecond() {
    const {formData, handleInputChange} = useContext(animalContext)
    const [comportamentosSelecionados, setComportamentosSelecionados] = useState<string[]>([]);

    const actions = [
        { id: 1, actionName: 'Bom com crianças', actionValue: 'Bom com crianças' },
        { id: 2, actionName: 'Não morde', actionValue: 'Não morde' },
        { id: 3, actionName: 'Bom com outros animais', actionValue: 'Bom com outros animais' },
        { id: 4, actionName: 'Gosta de passear', actionValue: 'Gosta de passear' },
        { id: 5, actionName: 'Inteligente', actionValue: 'Inteligente' },
    ];

    const toggleComportamentoSelecionado = (comportamento: string) => {
        let newComportamentos = comportamentosSelecionados;
        if (comportamentosSelecionados.includes(comportamento)) {
            newComportamentos = comportamentosSelecionados.filter(item => item !== comportamento)
            setComportamentosSelecionados(newComportamentos);
        } else {
            newComportamentos = [...comportamentosSelecionados, comportamento]
            setComportamentosSelecionados(newComportamentos);
        }
        handleInputChange('comportamentos', newComportamentos);
      };
    
    return (
        <>
            <SafeAreaView style={{flex: 0.8}}>
                <Text style={styles.labelTitle}>Comportamento do pet</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {actions.map((item) => (
                        <ComportamentoButton key={item.actionValue} onPress={() => toggleComportamentoSelecionado(item.actionValue)} text={item.actionName}/>
                    ))}
                </View>
                <Text style={styles.labelTitle}>Vermifugado</Text>
                <FormTrueOrFalse labelName="vermifugado" setStateValue={handleInputChange} />
                <Text style={styles.labelTitle}>Vacinado</Text>
                <FormTrueOrFalse labelName="vacinado" setStateValue={handleInputChange} />
                <Text style={styles.labelTitle}>Castrado</Text>
                <FormTrueOrFalse labelName="castrado" setStateValue={handleInputChange} />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    labelTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },
    petAction: {
        paddingHorizontal: 18,
        height: 48,
        borderRadius: 48,
        marginTop: 8,
        justifyContent: 'flex-start'
    }
})