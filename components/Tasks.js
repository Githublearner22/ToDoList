import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Tasks = (props) => {

return (
<View style={styles.table}>
<View style={styles.taskRow}>
<TouchableOpacity style={styles.square}></TouchableOpacity>
  <Text style={styles.taskText}>{props.text}</Text>
    <View style={styles.circular}>
    </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  table: {
    borderRadius: 10,
  },
  taskText: {
    textAlign: 'center',
    fontSize: 18,
    flex: 1,
  },
  square: {
    backgroundColor: '#55BCF68F',
    borderColor: '#0005',
    flex: 0.05,
    height: 17,
    borderWidth: 1,
  },
  taskRow: {
    marginLeft: 3,
    marginRight: 3,
    flexDirection: 'row',
    backgroundColor: '#fff1',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  circular: {
    marginRight:2,
    borderColor: '#0005',
    borderRadius: 15,
    borderWidth: 1,
    height: 17,
    flex: 0.05,
  },
});
export default Tasks;