import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput placeholder='Item de lista' style={styles.input} />
        <Button style={styles.botonAdd} title="ADD"/>
      </View>

      <View style={styles.box}>
        <View style={styles.item}>
          <Text>Item</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200
  },
  botonAdd : {
    padding: 30,
    backgroundColor: '#000'
  },
  box :{
    borderColor: 'black',
    borderWidth: 1,
    height: '70%',
    marginTop: 40,
    padding: 20
  },
  item:{
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
