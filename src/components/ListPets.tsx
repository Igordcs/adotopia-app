import {View, FlatList, Text} from 'react-native';
import { PetCard } from './PetCard';
import { AnimalResponseType } from '../interfaces/animal';

interface ListPetsProps {
    data: AnimalResponseType[],
    category?: string
}

export const ListPets = ({data, category}: ListPetsProps) => {
    return (
        <View style={{flex: 1}}>
            <FlatList
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
                return (
                    <PetCard animal={item} index={index} />
                )
            }}
            />
        </View>
    )
}