import React from 'react';
import {Text,View,ScrollView,Linking} from 'react-native';
import { FontAwesome, Feather} from '@expo/vector-icons'
import { RectButton } from "react-native-gesture-handler";
import {useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles'

export default function Detail() {
 const route = useRoute();
 const params = route.params
 const message = `Olá ${params.name}, olá, bem-vindo ao Connect`;

 function sendMail() {
  MailComposer.composeAsync({
    subject: `Login no Connect: ${params.name}`,
    recipients: [params.email],
    body: message,
  })
}

function sendWhatsapp() {
  Linking.openURL(`whatsapp://send?phone==55${params.phone}&text=${message}`);
}

  return (
<>
<Text style={styles.itemUser}>Olá, {params.name} </Text>
<Text style={styles.itemUser}>Como gostaria de se comunicar? </Text>

    <View style={styles.itemsContainer}>
      
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>


      <RectButton  onPress={sendWhatsapp} style={styles.item}>
      <FontAwesome  size={30} name="whatsapp" color="#fff" />
        <Text style={styles.itemTitle}>Via whatsapp</Text>
      </RectButton>

      <RectButton onPress={sendMail} style={styles.item}>
      <Feather  size={30} name="mail" color="#fff" />
        <Text style={styles.itemTitle}>Via E-mail</Text>
      </RectButton>
    </ScrollView>
    
  </View>
  </>
    )
}