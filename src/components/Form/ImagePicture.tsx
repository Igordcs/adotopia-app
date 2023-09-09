import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Pressable, Image, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {ImagePickerAsset} from 'expo-image-picker';

export const ImagePicture = ({pickUpImage, imagem}: {pickUpImage: any, imagem: ImagePickerAsset}) => {
    return (
        <>
            <Pressable style={styles.container}>
                <Pressable style={styles.closeButton} onPress={pickUpImage}>
                    <MaterialCommunityIcons name='close' size={24} color={Colors.default.red} />
                </Pressable>
                <Image 
                    style={styles.container}
                    source={{
                        uri: imagem.uri
                    }}
                    resizeMode='cover'
                />
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 140,
        marginRight: 12
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        left: 100,
        zIndex: 99,
        backgroundColor: Colors.default.grey,
        width: 28,
        height: 28,
        borderRadius: 24/2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})