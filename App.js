import  React,{useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Constants from 'expo-constants';

import Tasks from './components/Tasks';

const App = () => {
const [ task, setTask ] = useState();
const [ taskItems, setTaskItems] = useState([]);
const handleAddTask = () => {
setTaskItems([...taskItems, task])
Keyboard.dismiss();
setTask(null);
this.textInput.clear();
}
const completeTask = ( index ) => {
  let itemsCopy = [ ...taskItems ];
  itemsCopy.splice( index, 1 );
  setTaskItems(itemsCopy);
}
return (
<View style={styles.container}>
  <ImageBackground source={require('./assets/cover.jpg')} resizeMode='cover' style={{flex: 1}} >
  <Text style={styles.title}>
  What to do.
  </Text>
  {
    taskItems.map((item, index) => {
     return (
     <TouchableOpacity key={index} onPress={() => completeTask(index)}>
     <Tasks text={item} />
     </TouchableOpacity>
  )}
  )
  }
  <KeyboardAvoidingView
  behavior={Platform.OS==='ios' ? 'padding':'height'}
  style={styles.writeTaskWrapper} >
  <TextInput ref={input => { this.textInput = input }} style={styles.input} placeholder={'Write a task'} onChangeText={text=>setTask(text)} />
  <TouchableOpacity onPress={() => handleAddTask()}>
  <View style={styles.addTask} >
  <Text style={styles.plusSign}>+</Text>
  </View>
  </TouchableOpacity>
  </KeyboardAvoidingView>
  </ImageBackground>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    borderRadius: 5,
  },
  title: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  writeTaskWrapper: {
    padding: 10,  
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
  input: {
    padding: 5,
    backgroundColor: '#fff',
    height: 45,
    fontSize: 15,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    flex: .99,
    borderRadius: 15,
    },
  addTask: {
    borderRadius: 30,
    backgroundColor: '#5929d2aa',
    flex: .01,
    width: 60,
  },
  plusSign: {
    fontSize: 50,
    paddingBottom: 6,
    textAlign: 'center',
  },

  
});
export default App;