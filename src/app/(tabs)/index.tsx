import { StyleSheet, TextInput, View, Text, FlatList, StatusBar, Platform} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { CategoryButton } from '../../components/CategoryButton';
import { CategoryButtonProps, PetInfo } from '../../constants/types';
import { PetCard } from '../../components/PetCard';
import { useState } from 'react';
import { stylized } from '../../constants/styles';
import { ListPets } from '../../components/ListPets';



export default function Home() {
  const [categorie, setCategorie] = useState('Novos')

  const categories: CategoryButtonProps[] = [
    {
      title: "Novos",
      iconName: "star-shooting",
      onPress: () => setCategorie('Novos'),
      active: categorie === "Novos"
    },
    {
      title: "Cães",
      iconName: "dog",
      onPress: () => setCategorie('Cães'),
      active: categorie === "Cães"
    },
    {
      title: "Gatos",
      iconName: "cat",
      onPress: () => setCategorie('Gatos'),
      active: categorie === "Gatos"
    },
    {
      title: "Peixes",
      iconName: "fish",
      onPress: () => setCategorie('Peixes'),
      active: categorie === "Peixes"
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
      <ListPets/>
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
