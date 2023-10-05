import React, { forwardRef, useState, useCallback, useMemo } from "react";
import { TextInputProps, ViewProps } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import { Container, TextInput, ButtonIcon, ErrorText } from "./styles";
import { colors } from "../../common";

interface InputProps extends TextInputProps {
  icon: keyof typeof Feather.glyphMap;
  iconRight?: keyof typeof Entypo.glyphMap;
  iconRightPress?: () => void;
  containerStyle?: ViewProps["style"];
  error: string;
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    icon,
    iconRight,
    containerStyle = {},
    iconRightPress,
    error = "",
    value = "",
    ...rest
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!value);
  }, []);

  const useColor = useMemo(
    () =>
      !!error
        ? colors.error
        : !!value || isFocused
        ? colors.primaryColor
        : colors.placeholder,
    [error, value, isFocused]
  );
  return (
    <>
      <Container
        style={[{ elevation: 2 }, containerStyle]}
        isFocused={!!value || isFocused}
        isErrored={!!error}
      >
        <Feather name={icon} size={20} color={useColor} />
        <TextInput
          ref={ref}
          placeholderTextColor={colors.placeholder}
          keyboardAppearance="dark"
          defaultValue={""}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        {iconRight ? (
          <ButtonIcon onPress={iconRightPress}>
            <Entypo name={iconRight} size={20} color={useColor} />
          </ButtonIcon>
        ) : null}
      </Container>
      {!!error ? <ErrorText>{error}</ErrorText> : null}
    </>
  );
};

export default forwardRef(Input);
