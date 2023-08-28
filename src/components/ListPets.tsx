import {View, FlatList} from 'react-native';
import { PetCard } from './PetCard';
import { PetInfo } from '../constants/types';

export const ListPets = () => {
    const petsData: PetInfo[] = [
        {
          petId: 1,
          petName: "Pantero",
          petRace: "Pitbull",
          localization: "Garanhuns, PE",
          imageUrl: "https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg"
        },
        {
          petId: 2,
          petName: "Pantero",
          petRace: "Pitbull",
          localization: "Garanhuns, PE",
          imageUrl: "https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg"
        },
        {
          petId: 3,
          petName: "Pantero",
          petRace: "Pitbull",
          localization: "Garanhuns, PE",
          imageUrl: "https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg"
        },
        {
          petId: 4,
          petName: "Pantero",
          petRace: "Pitbull",
          localization: "Garanhuns, PE",
          imageUrl: "https://petshopdamadre.com.br/wp-content/uploads/2022/11/125.jpg"
        },
      ]

    return (
        <View style={{flex: 1}}>
            <FlatList
            data={petsData}
            numColumns={2}
            keyExtractor={(item) => `${item.petId}`}

            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
                return (
                <PetCard pet={item} />
                )
            }}
            />
        </View>
    )
}