import React, {usaState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, FlatList} from 'react-native';

//importando os icones da lib instalada
import Icon from 'react-native-vector-icons/Ionicons';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor="#171d31" barStyle="light-content" />

    <View style={styles.titleView}>
      <Text style={styles.titleText}>Lista de Afazeres</Text>
    </View>

    {/* Criando uma lista */}

    <TouchableOpacity style={styles.botaoPlus}>
      {/* exemplo da chamada de um ícone
      link dos nomes: https://oblador.github.io/react-native-vector-icons/ */}
      <Icon name="ios-add" size={30} color="white" />
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
  botaoPlus:{
    backgroundColor:'#0094FF',
    position:'absolute',
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    right:25,
    bottom: 25,
    elevation:2,
    zIndex:9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3,
    }
  },
});