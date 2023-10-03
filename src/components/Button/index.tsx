import React from "react";
import { ActivityIndicator, TextProps, ViewProps } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../common";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  loading: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
  children: string;
  styleText?: TextProps["style"];
  styleIcon?: object;
  containerStyle?: ViewProps["style"];
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  icon,
  children = "",
  styleText = {},
  styleIcon,
  containerStyle = {},
  ...rest
}) => {
  return (
    <Container
      style={[{ elevation: 2, borderRadius: 10 }, containerStyle]}
      activeOpacity={0.7}
      enabled={!loading}
      {...rest}
    >
      <>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={colors.white}
            style={{ marginRight: 16 }}
          />
        ) : (
          icon && (
            <MaterialIcons
              name={icon}
              color={colors.white}
              size={20}
              style={{
                paddingRight: 16,
              }}
            />
          )
        )}
        <ButtonText style={styleText}>{children}</ButtonText>
      </>
    </Container>
  );
};

export default Button;
