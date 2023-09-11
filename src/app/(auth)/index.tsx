import {Dimensions, View, Image, Pressable, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState, createRef} from 'react';
import heroImg_CatEating from '../../assets/illustrations/heroImg_CatEating.png';
import Colors from '../../constants/Colors';
import { Link } from 'expo-router';

export default function LoginOrRegister() {
  
    return (
        <SafeAreaView style={styles.container}>
            <Image source={heroImg_CatEating} style={styles.image} />

            <View style={{flex: 0.2,  alignSelf: 'center'}}>
              <Text style={styles.title}>Boas vindas!</Text>
              <Text style={styles.description}>Explore, escolha, adote. Faça login e continue escrevendo a história de amor entre você e seu futuro companheiro.</Text>
            </View>

            <View style={{flex: 0.2, alignSelf: 'center', alignItems: 'center'}}>
              <Link href="/login" asChild>
                <Pressable style={styles.loginButton}>
                  <Text style={styles.buttonText}>Fazer login</Text>
                </Pressable>
              </Link>
              <Link href="/register" asChild>
                <Pressable style={styles.registerButton}>
                  <Text style={[styles.buttonText, {color: Colors.default.primary}]}>Registrar-se</Text>
                </Pressable>
              </Link>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      flex: 1,
    },
    image: {
      flex: 0.6,
      width: Dimensions.get('window').width - 36,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    title: {
      fontWeight: '800',
      fontSize: 28,
      color: Colors.default.primary,
      textAlign: 'center'
    },
    description: {
      width: Dimensions.get('window').width / 1.25,
      fontWeight: '400',
      color: Colors.default.black,
      textAlign: 'center'
    },
    loginButton: {
      width: Dimensions.get('window').width / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.default.primary,
      padding: 16,
      borderRadius: 6,
      marginBottom: 6
    },
    registerButton: {
      width: Dimensions.get('window').width / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      borderRadius: 6,
      borderColor: Colors.default.primary,
      borderWidth: 1,
    },
    buttonText: {
      color: Colors.default.white,
      fontSize: 16
    }
  });