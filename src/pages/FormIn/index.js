import React, { useState,  } from 'react';
import { View,KeyboardAvoidingView,ScrollView, Platform, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

export default function FormIn() {
  const navigation =useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

function NavigateToDetail(name,email,phone){
  if(!name,!email,!phone){
    Alert.alert('Dados Inválidos', 'Verifique seus dados novamente')
  } else{
  navigation.navigate('Detail', {name,email,phone}) 
}}
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>

      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}> * SEU NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>* SEU E-MAIL</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Seu E-mail "
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

<Text style={styles.label}>* SEU NÚMERO</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Seu número "
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity onPress={() => NavigateToDetail(name,email,phone)} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}