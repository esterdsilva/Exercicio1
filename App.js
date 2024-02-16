import React from "react";
import { Text, View, StyleSheet } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome Completo: Ester Dutra da Silva</Text>
      <Text style={styles.text}>Faculdade: FIAP</Text>
      <Text style={styles.text}>Curso: Analise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.text}>Turma: 2TDSPV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
