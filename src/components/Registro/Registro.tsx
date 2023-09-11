import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native'
import { RegistroResponseType } from '../../interfaces/animal'
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import formatarDataChat from '../../util/formatData';

interface RegistroProps {
    registro: RegistroResponseType,
}

const {width} = Dimensions.get("window");

export const Registro = ({registro}: RegistroProps) => {
    return (
        <Pressable
            style={{borderWidth: 4, borderColor: '#eee', justifyContent: 'space-between', padding: 12}}
        >
            <Text style={{fontSize: 18, fontWeight: '600'}}>#{registro.protocolo}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Doador: 
                        <Text style={{fontSize: 16, fontWeight: '400'}}>{registro.doador.nome}</Text>
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Adotante: 
                        <Text style={{fontSize: 16, fontWeight: '400'}}>{registro.adotante.nome}</Text>
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Animal: 
                        <Text style={{fontSize: 16, fontWeight: '400'}}>{registro.animal.name}</Text>
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Raça: 
                        <Text style={{fontSize: 16, fontWeight: '400'}}>{registro.animal.raca}</Text>
                    </Text>
                </View>
            </View>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Data: {formatarDataChat(registro.data)}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

})