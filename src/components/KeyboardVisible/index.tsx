import React, {ReactNode, useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

interface KeyboardProps {
  children: ReactNode | any;
}

const KeyboardVisible: React.FC<KeyboardProps> = ({children}) => {
  const [isKeyBoardVisible, setBoardVisible] = useState(false);

  useEffect(() => {
    const KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBoardVisible(true);
      },
    );
    const KeyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setBoardVisible(false);
      },
    );
    return () => {
      KeyboardDidShowListener.remove();
      KeyboardDidHideListener.remove();
    };
  }, []);

  if (isKeyBoardVisible) {
    return;
  }

  return children;
};

export default KeyboardVisible;
