

import React from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';

const LoyaltyScreenPage: React.FC = () => {
  const { width } = useWindowDimensions();
  const buttonWidth = width * 0.4;
  const buttonHeight = 100;

  const titles = [
    'El camión se demoró más de lo esperado',
    'Nunca llego el camion',
    'El operador no fue cordial',
    'El operadore fue irrespetuoso',
    'El camión se demoró más de lo esperado',
    'El camión se demoró más de lo esperado',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.mainSection}>
        <Text style={styles.subtitle}>Por favor valora tu experiencia</Text>
        
        <View style={styles.buttonsContainer}>
          {titles.map((title, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log(`${title} seleccionado`)}
              style={[styles.touchableButton, { width: buttonWidth, height: buttonHeight }]}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  mainSection: {
    transform: [{ translateY: -10 }],
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  touchableButton: {
    marginBottom: 20,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default LoyaltyScreenPage;


