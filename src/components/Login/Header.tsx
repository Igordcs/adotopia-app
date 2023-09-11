import { MaterialCommunityIcons } from '@expo/vector-icons'
import {View, Pressable, Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'
import { router } from 'expo-router'

export const Header = ({title}: {title: string}) => {
    return (
        <>
            <View style={styles.header}>
                <Pressable style={{alignSelf: 'flex-start', width: 36}} onPress={() => router.back()}>
                    <MaterialCommunityIcons name="chevron-left" size={36} color={Colors.default.black} />
                </Pressable>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        flex: 1,
        textAlign: 'center',
        marginRight: 38
    },
})