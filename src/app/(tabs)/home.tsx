import { StyleSheet, TextInput, View, Text, FlatList, StatusBar, Platform} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { CategoryButton } from '../../components/CategoryButton';
import { CategoryButtonProps } from '../../constants/types';
import { useCallback, useContext, useState } from 'react';
import { stylized } from '../../constants/styles';
import { ListPets } from '../../components/ListPets';
import { animalContext } from '../../contexts/animal/animalContext';
import { useFocusEffect } from '@react-navigation/native';


export default function TabHome() {
  const {getAllAnimals, animals, getAllAnimalsByEspecie} = useContext(animalContext)
  const [categorie, setCategorie] = useState('Proximos')

  useFocusEffect(
    useCallback(() => {
      getAllAnimals()
    }, [])
  );

  const handleCategoryChange = (category: string) => {
    setCategorie(category);
    if(category == "Proximos")
      return getAllAnimals();
    getAllAnimalsByEspecie(category);
  }

  const categories: CategoryButtonProps[] = [
    {
      title: "Próximos a você",
      iconName: "map-marker-distance",
      onPress: () => handleCategoryChange("Proximos"),
      active: categorie === "Proximos"
    },
    {
      title: "Cães",
      iconName: "dog",
      onPress: () => handleCategoryChange("CACHORRO"),
      active: categorie === "CACHORRO"
    },
    {
      title: "Gatos",
      iconName: "cat",
      onPress: () => handleCategoryChange("GATO"),
      active: categorie === "GATO"
    },
    {
      title: "Peixes",
      iconName: "fish",
      onPress: () => handleCategoryChange("PEIXE"),
      active: categorie === "PEIXE"
    }
  ]

  return (
    <View style={stylized.rootContainer}>
      <View style={{marginBottom: 18}}>
        <Text style={stylized.titleGreyRegular}>Sua localização</Text>
        <Text style={stylized.titleSemiBold}>Garanhuns, PE</Text>
      </View>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder='Pesquise por pets'/>
        <RectButton style={styles.searchButton}>
          <EvilIcons name='search' size={24} color={Colors.default.white} />
        </RectButton>
      </View>
      <Text style={{fontSize: 18, fontWeight: '600', fontFamily: 'Lexend_600SemiBold', marginBottom: 6}}>Categorias</Text>
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.title}
        renderItem={({item, index}) => (
          <CategoryButton title={item.title} iconName={item.iconName} onPress={item.onPress} active={item.active} />
        )}
        style={{maxHeight: 64, width: '100%', paddingHorizontal: 12}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ListPets data={animals}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 12,
    marginTop: Platform.OS === 'ios' ? 55 : StatusBar.currentHeight,
    backgroundColor: Colors.default.white
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    width: '80%',
    backgroundColor: Colors.default.grey,
    borderRadius: 6,
  },
  searchButton: {
    height: 48,
    width: 48,
    backgroundColor: Colors.default.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginLeft: 4
  }
});
