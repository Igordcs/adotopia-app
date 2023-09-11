import {useCallback, useContext} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import Colors from '../../constants/Colors';
import { stylized } from '../../constants/styles';
import { ListPets } from '../../components/ListPets';
import { EmptyPetsState } from '../../components/EmptyPetsState';
import { animalContext } from '../../contexts/animal/animalContext';
import { useFocusEffect } from '@react-navigation/native';


export default function AddPet() {
    const {getMyAnimals, myAnimals} = useContext(animalContext);

    useFocusEffect(
        useCallback(() => {
            getMyAnimals()
        }, [])
    );

    return (
        <View style={stylized.rootContainer}>
            {/* <View style={{marginBottom: 24, width: '80%'}}>
                <Text style={stylized.titleSemiBold}>Adicionar pet</Text>
                <Text style={stylized.titleDescription}>Sua doação é a esperança que esses animais merecem.</Text>
            </View> */}

            <View style={{flex: 1}}>
                <Text style={[stylized.titleSemiBold, {marginBottom: 8}]}>
                    Doar Pet
                </Text>
                {/* <ListPets data={myAnimals}/>  */}
                <EmptyPetsState/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        paddingHorizontal: 12,
        marginTop: Platform.OS === 'ios' ? 55 : StatusBar.currentHeight,
        backgroundColor: Colors.default.white
      },
})