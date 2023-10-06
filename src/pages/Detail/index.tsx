import React, { useCallback } from "react";
import { Linking, Alert, ViewProps } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import { Button } from "../../components";
import { BoxContainer, Container, Description } from "./styles";

interface paramsProps {
  name: string;
  email: string;
  phone: string;
}

const containerStyleButtom = {
  flexDirection: "column",
  height: 120,
  width: 120,
} satisfies ViewProps["style"];

const Detail = () => {
  const route = useRoute();
  const params = route.params as paramsProps;
  const message = `Olá ${params.name}, bem-vindo ao Connect`;

  const sendMail = useCallback(() => {
    MailComposer.composeAsync({
      subject: `Login no Connect: ${params.name}`,
      recipients: [params.email],
      body: message,
    });
  }, []);

  const sendWhatsapp = useCallback(async () => {
    try {
      await Linking.openURL(
        `whatsapp://send?phone==55${params.phone}&text=${message}`
      );
    } catch (err) {
      Alert.alert(
        "Aplicativo não encontrado",
        "Gostaria de instalar agora ?",
        [
          {
            text: "Sim, Instalar",
            onPress: async () =>
              await Linking.openURL(
                "https://play.google.com/store/apps/details?id=com.whatsapp"
              ),
            style: "default",
          },
          {
            text: "Não",
            onPress: () => {},
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  }, []);

  return (
    <Container>
      <Description>Como gostaria de se comunicar? </Description>

      <BoxContainer>
        <Button
          loading={false}
          onPress={sendWhatsapp}
          icon="whatsapp"
          containerStyle={containerStyleButtom}
          iconStyle={{ paddingRight: 0 }}
          iconSize={30}
          styleText={{
            textAlign: "center",
          }}
        >
          Whatsapp
        </Button>

        <Button
          loading={false}
          icon="mail-bulk"
          containerStyle={containerStyleButtom}
          iconStyle={{ paddingRight: 0 }}
          iconSize={30}
          styleText={{ textAlign: "center" }}
          onPress={sendMail}
        >
          E-mail
        </Button>
      </BoxContainer>
    </Container>
  );
};

export default Detail;
