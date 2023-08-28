import { useGlobalSearchParams } from 'expo-router'
import {View, Text, Pressable} from 'react-native'
import { Caroussel } from '../../components/Caroussel';
import { stylized } from '../../constants/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Caracteristica } from '../../components/Caracteristica';
import { PetAction } from '../../components/PetAction';

export default function PetDetails() {
    const {id} = useGlobalSearchParams();   

    const caracteristicas = [
        {
            key: "Espécie",
            value: "Cachorro"
        },
        {
            key: "Raça",
            value: "pitbull"
        },

        {
            key: "Porte",
            value: "médio"
        },
        {
            key: "Espécie",
            value: "Cachorro"
        },
        {
            key: "Espécie",
            value: "Cachorro"
        },
        {
            key: "Espécie",
            value: "Cachorro"
        },
    ]

    return (
        <View style={stylized.rootContainer}>
            <Caroussel />

            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: 16}}>
                <View>
                    <Text style={stylized.titleSemiBold} >Pantero</Text>
                    <Text style={stylized.titleGreyRegular}>Pitbull</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name='map' size={20} color={Colors.default.primary} style={{marginRight: 4}} />
                    <Text style={stylized.titleGreyRegular}>Garanhuns, PE</Text>
                </View>
            </View>

            <View style={{marginTop: 8}}>
                <Text style={stylized.titleSemiBold}>Características</Text>
                <View style={{marginBottom: 16}}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {caracteristicas.map((item, index) => <Caracteristica keyC={item.key} value={item.value} />)}
                    </View>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
                    <PetAction text="Bom com crianças" />
                    <PetAction text="Não morde" />
                    <PetAction text="Gosta de passear" />
                    <PetAction text="Amoroso" />
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                <View>
                    <Text style={stylized.titleSemiBold}>Clarisse</Text>
                    <Text style={stylized.titleDescription}>Dona do Pantero</Text>
                </View>
                <View>
                    <Pressable>
                        <MaterialCommunityIcons name="chat-processing-outline" size={32} color={Colors.default.primary} />
                    </Pressable>
                </View>
            </View>
            <View style={{marginTop: 12}}>
                <Text style={stylized.ownerPetDescription}>
                    Pantero é curioso e inteligente, sempre pronto para aprender truques e comandos básicos. Ele está sempre animado para conhecer novas pessoas e fazer amizades, tanto com humanos quanto com outros animais.
                </Text>
            </View>

            <Pressable style={{padding: 12, borderRadius: 8, backgroundColor: Colors.default.primary, alignItems: 'center', justifyContent: 'center', marginTop: 12}}>
                <Text style={[stylized.titleSemiBold, {color: Colors.default.white}]}>Adotar</Text>
            </Pressable>
        </View>
    )
}