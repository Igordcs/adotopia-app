import {View, Text, Pressable, StyleSheet, Animated, ScrollView, Dimensions} from 'react-native';
import { stylized } from '../../constants/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, createRef, useEffect } from 'react';
import Colors from '../../constants/Colors';
import { FormFirst } from './FormFirst';
import { FormSecond } from './FormSecond';
import { FormThird } from './FormThird';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function AddPetForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const scrollX = new Animated.Value(0);

    const windowWidth = Dimensions.get('screen').width;
    const scrollViewRef = createRef<ScrollView>();

    const handleStepChange = (step) => {
        if(step < 1 || step > 3)
            return;
        setCurrentStep(step);
        scrollViewRef.current?.scrollTo({ x: (step-1) * windowWidth, animated: true });
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.default.white}}>
            <View style={{paddingHorizontal: 12}}>
                <Link href={"/(tabs)/addPet"} asChild>
                    <Pressable>
                        <MaterialCommunityIcons name='chevron-left' size={32} color={Colors.default.primary}  />
                    </Pressable> 
                </Link>
                <View style={{alignSelf: 'flex-start', maxWidth: '60%'}}>
                    <Text style={stylized.titleSemiBold}>
                        Adicionar Pet
                    </Text>
                    <Text style={stylized.titleDescription}>
                        Vamos precisar de algumas informações sobre seu pet para adicioná-lo. 
                    </Text>
                </View>
            </View>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            scrollEnabled={false}
            scrollEventThrottle={16}
          >
            <View style={styles.page}>
              <FormFirst />
            </View>
            <View style={styles.page}>
              <FormSecond />
            </View>
            <View style={styles.page}>
              <FormThird />
            </View>
          </ScrollView>
    
          <View style={styles.pageIndicator}>
            {[1, 2, 3].map((step) => (
              <Pressable
                key={step}
                style={[
                  styles.stepIndicator,
                  currentStep === step && { backgroundColor: Colors.default.primary },
                ]}
                onPress={() => handleStepChange(step)}
              />
            ))}
          </View>
    
          <View style={styles.pageNavigation}>
            <Pressable onPress={() => handleStepChange(currentStep - 1)}>
              <MaterialCommunityIcons name="chevron-left" size={32} color={Colors.default.primary} />
            </Pressable>
            <Pressable onPress={() => handleStepChange(currentStep + 1)}>
              <MaterialCommunityIcons name="chevron-right" size={32} color={Colors.default.primary} />
            </Pressable>
          </View>
        </SafeAreaView>
      );
    
}

const styles = StyleSheet.create({
    page: {
      width: Dimensions.get('window').width,
      flex: 1,
      paddingHorizontal: 12,
    },
    pageIndicator: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
    stepIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
      backgroundColor: Colors.default.grey,
    },
    pageNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
  });