import {Image, Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import { PetInfoProps } from '../constants/types';
import Colors from '../constants/Colors';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export const PetCard = ({pet}: PetInfoProps) => {
    return (
        <Link href={`/petDetails/${pet.petId}`} asChild>
            <Pressable style={styles.container} >
                <View>
                    <Image 
                        source={{uri: pet.imageUrl}} 
                        style={{height: 120, width: '100%', borderRadius: 4}}
                        resizeMode='cover'
                    
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4}}>
                    <View>
                        <Text style={{fontSize: 14, fontWeight: '600', fontFamily: 'Lexend_600SemiBold'}}>
                            {pet.petName}
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: '600', fontFamily: 'Lexend_600SemiBold', color: Colors.default.textGrey}}>
                            {pet.petRace}
                        </Text>
                    </View>
                    <BorderlessButton 
                        style={{
                            height: 32, 
                            width: 32, 
                            backgroundColor: Colors.default.primary, 
                            borderRadius: 16, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                        }}
                    >
                        <MaterialCommunityIcons name='chevron-right' size={24} color={Colors.default.white} />
                    </BorderlessButton>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('screen').height / 5,
        marginBottom: 12,
        margin: 2,
        backgroundColor: Colors.default.white,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Colors.default.grey
    }
})