import React, { useCallback, useRef, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { expo } from "../../../app.json";
import { Button, Input, KeyboardVisible } from "../../components";
import { Container, Title, Version } from "./styles";
import { colors } from "../../common";

const signInSchema = Yup.object({
  name: Yup.string().required("Nome obrigatório").min(3, "No mínimo 3 dígitos"),
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  phone: Yup.string()
    .required("Telefone obrigatório")
    .min(15, "Telefone inválido"),
});

export default function FormIn() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(signInSchema),
  });

  const NavigateToDetail = useCallback(
    ({ name = "", email = "", phone = "" }) => {
      if (!name || !email || !phone) {
        Alert.alert("Dados Inválidos", "Verifique seus dados novamente");
        return;
      }
      navigation.navigate("Detail", { name, email, phone });
    },
    []
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <FontAwesome5 name="react" size={100} color={colors.primaryColor} />
            <View>
              <Title>Insira seus dados</Title>
            </View>
            <Controller
              control={control}
              name="name"
              render={({
                field: {
                  onChange,
                  // onBlur,
                  value,
                },
              }) => (
                <Input
                  autoCorrect={true}
                  autoCapitalize="words"
                  keyboardType="default"
                  icon="user"
                  placeholder="Seu nome *"
                  returnKeyType="next"
                  onSubmitEditing={() => emailInputRef.current?.focus()}
                  editable={!loading}
                  // onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({
                field: {
                  onChange,
                  // onBlur,
                  value,
                },
              }) => (
                <Input
                  ref={emailInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  icon="mail"
                  placeholder="Seu e-mail *"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  editable={!loading}
                  // onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({
                field: {
                  onChange,
                  // onBlur,
                  value,
                  ref
                },
              }) => (
                <Input
                  mask="phone"
                  ref={passwordInputRef}
                  autoCorrect={false}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  icon="phone"
                  placeholder="Seu telefone *"
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(NavigateToDetail)}
                  editable={!loading}
                  // onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.phone?.message}
                  maxLength={15}
                />
              )}
            />
            <Button
              loading={loading}
              containerStyle={{ marginTop: 16 }}
              onPress={handleSubmit(NavigateToDetail)}
            >
              ENTRAR
            </Button>
            <KeyboardVisible>
              <Version>Versão {expo.version}</Version>
            </KeyboardVisible>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
