import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';

export default function App() {
  const names = ["Dan", "Zen", "Lojong"]
  return (
    <View style={styles.container}>
      {/* <Text>WELCOME!</Text> */}
      <StatusBar style="auto" />
      {names.map((name) => (
        <Welcome name={name} />
      ))}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Horizontal
    alignItems: 'center',
    // Vertical
    justifyContent: 'center',
  },
});
