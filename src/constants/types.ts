import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';

export type MaterialIconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];
export type PetInfo = {
  petId: number, 
  petName: string, 
  petRace: string, 
  localization: string, 
  imageUrl: string
}

export interface CategoryButtonProps {
  title: string,
  iconName: MaterialIconName,
  active: boolean,
  onPress: () => {},
}

export interface PetInfoProps {
  pet: PetInfo
}

export type MessageInfo = {
  id: number,
  name: string,
  data: Date,
  content: string,
  userAvatar: string
}
