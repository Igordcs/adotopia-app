import {Animated, View, Pressable, Dimensions, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingItem } from '../../components/Onboarding/OnboardingItem';
import onboardingItems from '../../constants/onboardingInfo';
import { ScrollView } from 'react-native-gesture-handler';
import {useRef, useState, createRef} from 'react';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(1);
    const scrollX = useRef(new Animated.Value(0));
    const scrollViewRef = createRef<ScrollView>();

    const windowWidth = Dimensions.get('screen').width;
    const handleStepChange = (step: number) => {
        if(step < 1 )
            return;

        if (step > 3)
            return router.replace("/(tabs)/home");
        setCurrentStep(step);
        scrollViewRef.current?.scrollTo({ x: (step-1) * windowWidth, animated: true });
    };

    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX.current } } }],
                        { useNativeDriver: false })}
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                >
                {onboardingItems.map((item) => <OnboardingItem 
                                                key={item.title}
                                                title={item.title} 
                                                description={item.description} 
                                                image={item.image} />)}
                </ScrollView>

                <View style={styles.pageIndicator}>
                    {[1, 2, 3].map((step) => (
                    <Pressable
                        key={step}
                        style={[
                            styles.stepIndicator,
                            currentStep === step && { backgroundColor: Colors.default.primary, width: 20 },
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
                        <MaterialCommunityIcons name={currentStep === 3 ? 'check' : 'chevron-right' } size={32} color={Colors.default.primary} />
                    </Pressable>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
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