import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoyaltyScreenPage: React.FC = () => {
  const [rating, setRating] = useState(0);  // Estado para la calificación seleccionada

  // Función para actualizar la calificación
  const handleRating = (star: number) => {
    setRating(star);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Text style={styles.logo}>Por favor valora tu experiencia</Text>
      </View>
      
      <View style={styles.starContainer}>
        {/* Renderiza 5 estrellas con calificación */}
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Image
              source={
                star <= rating
                  ? require('../../assets/starUserExperienceRating.png')  // Estrella rellena
                  : require('../../assets/emptyStarUserExperienceRating.png')  // Estrella vacía
              }
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      
      <Text style={styles.ratingText}>
        {rating === 0 ? "Califica nuestro servicio" :
         rating === 5 ? "Excelente servicio" :
         rating >= 4 ? "Muy bueno, pero pudo ser mejor" :
         "Necesita mejorar"}
      </Text>

     {/* Comentarios */}
<View style={styles.feedbackContainer}>
  <View style={styles.feedbackRow}>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 1 seleccionado')}>
      <Text>Todo estuvo excelente</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 2 seleccionado')}>
      <Text>El camión llegó un poco tarde</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.feedbackRow}>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 3 seleccionado')}>
      <Text>No existió trato cordial por parte del funcionario</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 4 seleccionado')}>
      <Text>El funcionario fue irrespetuoso</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.feedbackRow}>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 5 seleccionado')}>
      <Text>El funcionario no disponia vestimenta o identificación visible</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.feedbackBox} onPress={() => console.log('Comentario 6 seleccionado')}>
      <Text>Otros... (especificar)</Text>
    </TouchableOpacity>
  </View>
</View>


     
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Confirmar respuesta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FFFBEA',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5A00',
    textAlign: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  star: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  ratingText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  feedbackContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  feedbackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feedbackBox: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#008000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoyaltyScreenPage;

