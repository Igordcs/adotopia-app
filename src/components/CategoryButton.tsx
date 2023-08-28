import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, StyleSheet, Alert} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { CategoryButtonProps } from '../constants/types';
import { useState } from 'react';
import Colors from '../constants/Colors';

export const CategoryButton = ({title, iconName, onPress, active}: CategoryButtonProps) => {
    return (
        <RectButton 
            style={[styles.wrapper, {backgroundColor: active ? Colors.default.primary : Colors.default.grey}]}
            onPress={onPress}
        >
            <MaterialCommunityIcons name={iconName} size={24} color={active ? Colors.default.white : Colors.default.black} style={{marginRight: 4}}  />
            <Text style={{color: active ? Colors.default.white : Colors.default.black, fontFamily: 'Lexend_600SemiBold'}}>{title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginRight: 12,
        borderRadius: 6
    },

})