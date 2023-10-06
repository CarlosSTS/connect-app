import React from "react";
import { ActivityIndicator, TextProps, ViewProps } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../common";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  loading: boolean;
  icon?: keyof typeof FontAwesome5.glyphMap;
  children: string;
  styleText?: TextProps["style"];
  containerStyle?: ViewProps["style"];
  iconSize?: number;
  iconStyle: object;
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  icon,
  children = "",
  styleText = {},
  containerStyle = {},
  iconSize,
  iconStyle,
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
            <FontAwesome5
              name={icon}
              color={colors.white}
              size={iconSize || 20}
              style={iconStyle || {
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
