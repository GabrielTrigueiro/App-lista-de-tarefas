import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import TaskList from './src/components/TaskList/index';
import Icon from 'react-native-vector-icons/Ionicons';//importando os icones da lib instalada
import * as Animatable from 'react-native-animatable';//lib pra animações
import AsyncStorage from '@react-native-async-storage/async-storage';
//criando um componente animado para o botão que já é um componente
const AnimatesBtn = Animatable.createAnimatableComponent(TouchableOpacity);

//função principal App
export default function App(){

  //criando um state para lista
  const [task, setTask] = useState([]);
  const [open,setOpen] = useState(false);
  const [input,setInput] = useState('');

  useEffect(()=>{
    async function loadtasks(){
      const taskStorage = AsyncStorage.getItem('@task')
      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }
    loadtasks();
  },[])

  useEffect(()=>{
    async function saveTask(){
      await AsyncStorage.setItem('@task', JSON.stringify(task))
    }
    saveTask();
  },[task])

  function handledAdd() {
    if(input == '') return;
     
      const data = {
        key: input,
        task: input
      }

      setTask([...task, data]);
      setOpen(false);
      setInput('');
  }

  //retorna todos os itens sem o que foi procurado
  const handleDelete = useCallback((data) => {
   const find = task.filter(r => r.key !== data.key);
   setTask(find);
 });

  return(
  <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor="#171d31" barStyle="light-content" />

    <View style={styles.titleView}>
      <Text style={styles.titleText}>Lista de Afazeres</Text>
    </View>

    {/* Criando uma lista
    data recebe a task
    keyextractor receber uma chave e retornar uma task conrespondente */}
    <FlatList 
      marginHorizontal={10}
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key)}
      renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete} />}
    />

    <Modal //tela para adicionar tarefa
    animationType='slide'//sobre quando ativado
    transparent={false}
    visible={open}//true apenas quando o btn for ativado
    >
      <SafeAreaView style={styles.addScreen}>

        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={()=> setOpen(false)}>
            <Icon 
            name='arrow-back-outline' 
            size={40} 
            color="#fff"
            style={{marginLeft: 5, marginRight: 5}} />
          </TouchableOpacity>

          <Text style={styles.moduleTitle}>
            Nova Tarefa
          </Text>
        </View>

        <Animatable.View style={styles.moduleBody} animation='fadeInUp' useNativeDriver>
            <TextInput
            placeholder='O que precisa fazer hoje?'
            style={styles.input}
            multiline={true}
            placeholderTextColor="#747474"
            autoCorrect={false}
            value={input}
            onChangeText={(texto) => setInput(texto)}
            />

            <TouchableOpacity style={styles.handledAdd} onPress={handledAdd}>
              <Text style={styles.handleText}>Casdastrar</Text>
            </TouchableOpacity>
          </Animatable.View>

      </SafeAreaView>
    </Modal>

    <AnimatesBtn
    style={styles.botaoPlus}
    useNativeDriver
    animation="bounceInUp"
    onPress={ () => setOpen(true) }
    >
      {/* exemplo da chamada de um ícone
      link dos nomes: https://oblador.github.io/react-native-vector-icons/ */}
      <Icon name="ios-add" size={30} color="white" />
    </AnimatesBtn>

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
  addScreen:{
    flex: 1,
    backgroundColor: '#171d31',
  },
  modalHeader: {
    marginTop:10,
    marginLeft:20,
    flexDirection: 'row',
    alignItems:'center',
  },
  moduleTitle:{
    marginLeft:15,
    fontSize: 23,
    color:'#fff'
  },
  handledAdd:{
    backgroundColor:'#fff',
    padding:9,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
    height:40,

  },
  handleText:{
    fontSize:20,
  },
  moduleBody:{
    marginTop:15,
  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#fff',
    borderRadius:5,
    padding:9,
    height:85,
    textAlignVertical: 'top',
    color:'#000',

  },
});