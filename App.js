import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Header />
      <Header />
      <Header />
      <Text style={styles.title}>aula 2</Text>
      <Text style={styles.title2}>/Fundamentos</Text>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red'
  }
});
