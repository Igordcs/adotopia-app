import { router, useLocalSearchParams } from 'expo-router'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import {useContext} from 'react';
import { Caroussel } from '../../components/Caroussel';
import { stylized } from '../../constants/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Caracteristica } from '../../components/Caracteristica';
import { PetAction } from '../../components/PetAction';
import { animalContext } from '../../contexts/animal/animalContext';
import { comportamentoIconMap } from '../../util/comportamentos';
import { authContext } from '../../contexts/auth/authContext';
import { chatContext } from '../../contexts/chat/chatContext';

export default function PetDetails() {
    const {id} = useLocalSearchParams();  
    const petIndex = Number(id);
    const {animals} = useContext(animalContext); 
    const {criarChat} = useContext(chatContext); 
    const {adotar} = useContext(authContext); 
    const animalSelected = animals[petIndex];

    const caracteristicas = [
        {
            key: "Raça",
            value: animalSelected.raca
        },
        {
            key: "Porte",
            value: animalSelected.porte
        },
        {
            key: "Castrado",
            value: animalSelected.vermifugado ? 'Sim' : 'Não'
        },
        {
            key: "Vermifugado",
            value: animalSelected.vermifugado ? 'Sim' : 'Não'
        },
        {
            key: "Vacinado",
            value: animalSelected.vermifugado ? 'Sim' : 'Não'
        },
    ]

    return (
        <View style={stylized.rootContainer}>
            <Caroussel item={animalSelected.foto} />

            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: 16}}>
                <View>
                    <Text style={stylized.titleSemiBold} >{animals[petIndex].name}</Text>
                    <Text style={stylized.titleGreyRegular}>{animals[petIndex].raca}</Text>
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
                        {caracteristicas.map((item, index) => <Caracteristica key={index} keyC={item.key} value={item.value} />)}
                    </View>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
                    {animalSelected.comportamentos.map((item) => <PetAction key={item} text={item}  />)}
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                <View>
                    <Text style={stylized.titleSemiBold}>{animals[petIndex].dono.nome}</Text>
                    <Text style={stylized.titleDescription}>Amante de pets</Text>
                </View>
                <View>
                    <Pressable onPress={() => criarChat(animals[petIndex].dono.id)}>
                        <MaterialCommunityIcons name="chat-processing-outline" size={32} color={Colors.default.primary} />
                    </Pressable>
                </View>
            </View>
            <View style={{marginTop: 12}}>
                <Text style={stylized.ownerPetDescription}>
                    {animals[petIndex].descricao}
                </Text>
            </View>

            <Pressable style={styles.submitButton} onPress={() => adotar(animals[petIndex].id)}>
                <Text style={[stylized.titleSemiBold, {color: Colors.default.white}]}>Adotar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        padding: 12, 
        borderRadius: 8, 
        backgroundColor: Colors.default.primary, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 12
    }
})