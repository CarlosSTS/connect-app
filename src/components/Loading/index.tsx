import React from "react";
import { Container, Title } from "./styles";
import { ActivityIndicator, Modal, ModalProps } from "react-native";
import { colors } from "../../common";

interface LoadingProps extends ModalProps {
  children: string;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  return (
    <Modal transparent animationType="slide">
      <Container>
        <ActivityIndicator size={"large"} color={colors.white} />
        <Title>{children}</Title>
      </Container>
    </Modal>
  );
};
export default Loading;
