import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';//lib pra animações

//função da tasklist
export default function TaskList({data, handleDelete}){
    return(
        <Animatable.View 
        style={styles.container}
        //animando as tasks
        animation="bounceIn"
        useNativeDriver
        >
            <TouchableOpacity onPress={()=> handleDelete(data)}>
                <Icon name={"checkmark-circle-outline"} size={30} color={"#121212"} />
            </TouchableOpacity>

            <View>
                <Text style={styles.task}>
                    {data.task}
                </Text>
            </View>
        </Animatable.View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        margin:8,
        padding:7,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        elevation:1.5,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3
        }
    },
    task:{
        color:'#121212',
        fontSize:20,
        paddingLeft:8,
        paddingRight:20,
    },
})