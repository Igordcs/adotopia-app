import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import {useState} from 'react';
import { ComportamentoButton } from '../../components/Form/comportamentoButton';
import { FormButtonSelect } from '../../components/Form/FormButtonSelect';
import { FormTrueOrFalse } from '../../components/Form/FormTrueOrFalse';



export function FormSecond() {
    const [comportamentosSelecionados, setComportamentosSelecionados] = useState<string[]>([]);

    const actions = [
        { id: 1, actionName: 'Bom com crianças', actionValue: 'Bom com crianças' },
        { id: 2, actionName: 'Não morde', actionValue: 'Não morde' },
        { id: 3, actionName: 'Bom com outros animais', actionValue: 'Bom com outros animais' },
        { id: 4, actionName: 'Gosta de passear', actionValue: 'Gosta de passear' },
        { id: 5, actionName: 'Inteligente', actionValue: 'Inteligente' },
    ];
    console.log(comportamentosSelecionados)

    const toggleComportamentoSelecionado = (comportamento: string) => {
        if (comportamentosSelecionados.includes(comportamento)) {
          setComportamentosSelecionados(comportamentosSelecionados.filter(item => item !== comportamento));
        } else {
          setComportamentosSelecionados([...comportamentosSelecionados, comportamento]);
        }
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
                <FormTrueOrFalse  />
                <Text style={styles.labelTitle}>Vacinado</Text>
                <FormTrueOrFalse  />
                <Text style={styles.labelTitle}>Castrado</Text>
                <FormTrueOrFalse  />
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