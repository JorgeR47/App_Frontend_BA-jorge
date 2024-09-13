import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface InteractiveIconsProps {
  iconSource: ImageSourcePropType;
  onPress: () => void;
}

// Componente genérico para un ícono interactivo
export const InteractiveIcon: React.FC<InteractiveIconsProps> = ({ iconSource, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
    <Image source={iconSource} style={styles.icon} />
  </TouchableOpacity>
);

// Exportar íconos específicos
export const InteractiveIndifferent = (props: InteractiveIconsProps) => (
  <InteractiveIcon {...props} iconSource={require('../../assets/indifferentUser.svg')} />
);

export const InteractiveHappy = (props: InteractiveIconsProps) => (
  <InteractiveIcon {...props} iconSource={require('../../assets/happinessUser.svg')} />
);

export const InteractiveLaughing = (props: InteractiveIconsProps) => (
  <InteractiveIcon {...props} iconSource={require('../../assets/laughingUser.svg')} />
);

const styles = StyleSheet.create({
  iconContainer: {
    margin: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});


