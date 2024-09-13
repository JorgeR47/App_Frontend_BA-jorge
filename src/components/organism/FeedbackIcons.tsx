import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InteractiveIcon } from '../molecules/InteractiveIcons';

const FeedbackIcons: React.FC = () => {
  return (
    <View style={styles.iconRow}>
      <InteractiveIcon 
        iconSource={require('../../assets/indifferentUser.svg')} 
        onPress={() => console.log('Indifferent selected')} 
      />
      <InteractiveIcon 
        iconSource={require('../../assets/happinessUser.svg')} 
        onPress={() => console.log('Happy selected')} 
      />
      <InteractiveIcon 
        iconSource={require('../../assets/laughingUser.svg')} 
        onPress={() => console.log('Laughing selected')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default FeedbackIcons;

