import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, Dimensions, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import * as ImagePicker from 'expo-image-picker';
import {useState, useEffect} from 'react';
import { ImagePicture } from "./ImagePicture";
import { SafeAreaView } from "react-native-safe-area-context";

const {width, height} = Dimensions.get("window");

export const FormImageInput = () => {
    const [selectedImages, setSelectedImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar sua galeria.');
          }
        })();
      }, []);
    
      const pickImages = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true, // Permite a seleção de várias imagens
          });
    
          if (!result.canceled) {
            setSelectedImages(result.assets);
          }
        } catch (error) {
          console.error('Erro ao escolher imagens:', error);
        }
      };

      const removeImage = (index: number) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);
      };

    return (
        <>
            <TouchableOpacity style={styles.formImage} onPress={pickImages}>
                <MaterialCommunityIcons name="image" size={36}  />
            </TouchableOpacity>
            <SafeAreaView>
                <ScrollView horizontal>
                    {selectedImages.map((item, index) => <ImagePicture key={item.assetId} pickUpImage={() => removeImage(index)} imagem={item} />)}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    formImage: {
        alignSelf: 'center',
        marginTop: 16,
        width: width - 72,
        height: height * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 4,
        borderStyle: "dashed"
    }
})