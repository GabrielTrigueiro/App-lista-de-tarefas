import React, {usaState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';

//importando os icones da lib instalada
import Icon from 'react-native-vector-icons/Ionicons';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor="#171d31" barStyle="light-content" />

    <View style={styles.titleView}>
      <Text style={styles.titleText}>Lista de Afazeres</Text>
    </View>

    <TouchableOpacity>
      {/* exemplo da chamada de um ícone
      link dos nomes: https://oblador.github.io/react-native-vector-icons/ */}
      <Icon name="add-circle" size={25} color="white" />
    </TouchableOpacity>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#171d31',
  },
  titleView:{

  },
  titleText:{
    marginTop:10,
    paddingBottom:10,
    fontSize:25,
    textAlign:'center',
    color:'#fff'
  },
});