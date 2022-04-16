import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, FlatList} from 'react-native';
import TaskList from './src/components/TaskList/index';

//importando os icones da lib instalada
import Icon from 'react-native-vector-icons/Ionicons';


export default function App(){

  //criando um state para lista
  const [task, setTask] = useState([
    {key: 1, task: 'Comprar pão'},
    {key: 2, task: 'Comprar '},
    {key: 3, task: ' pão'},
    {key: 4, task: 'Comprarpão'},
    {key: 5, task: 'Com prar pão'},
  ]);

  return(
    <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor="#171d31" barStyle="light-content" />

    <View style={styles.titleView}>
      <Text style={styles.titleText}>Lista de Afazeres</Text>
    </View>

    {/* Criando uma lista
    data recebea task
    keyextractor receber uma chave e retornar uma task conrespondente */}
    <FlatList 
      marginHorizontal={10}
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key)}
      renderItem={({item}) => <TaskList data={item} />}
    />

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