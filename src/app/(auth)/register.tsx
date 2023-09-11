import { SafeAreaView } from "react-native-safe-area-context";
import {View, Dimensions, StyleSheet, Pressable} from 'react-native';
import {createRef, useState } from 'react';
import { Header } from "../../components/Login/Header";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { FormRegisterFirst } from "../../components/Login/FormRegisterFirst";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FormRegisterSecond } from "../../components/Login/FormRegisterSecond";
import { FormRegisterThird } from "../../components/Login/FormRegisterThird";
import {useContext} from 'react';
import { authContext } from "../../contexts/auth/authContext";

export default function Register() {
    const {register} = useContext(authContext);
    const [currentStep, setCurrentStep] = useState(1);
    
    const windowWidth = Dimensions.get('screen').width;
    const scrollViewRef = createRef<ScrollView>();

    const handleStepChange = (step: number) => {
        if(step < 1)
            return;

        if(step > 2)
          return register();
        
        setCurrentStep(step);
        scrollViewRef.current?.scrollTo({ x: (step-1) * windowWidth, animated: true });
    };
    return (
        <SafeAreaView style={{flex: 1,  backgroundColor: Colors.default.white}}>
            <Header title="Registrar-se" />

            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
              scrollEnabled={false}
              scrollEventThrottle={16}
          >
            <View style={styles.page}>
              <FormRegisterFirst />
            </View>
            <View style={styles.page}>
              <FormRegisterSecond />
            </View>
          </ScrollView>
    
          <View style={styles.pageIndicator}>
            {[1, 2].map((step) => (
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
    )
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