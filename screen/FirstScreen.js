import React, {useState, useEffect} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Input } from 'react-native-elements';
import firebase from '../database/firebase'

const FirstScreen = (props) => {

  
    return (
        <View style ={styles.container}> 
            <View>
             <Text style={styles.tittle}>
                Bienvenido {props.route.params.name}
             </Text>
            </View>
            <View>
        
        <TouchableOpacity
            onPress={() => props.navigation.navigate('StartScreen')}
            style={styles.loginBotton}>
            <Text style={styles.loginBottonText}>Cerrar sesión</Text>
        </TouchableOpacity>
        </View>
        </View>
       
    )
}
//estilos
const styles = StyleSheet.create({

    container: {      //estilo general (del scrollview)
        flex: 1,
      
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },

    
   tittle:{      //estílo del título
    color: '#006fcc',
    fontSize:22,
    fontWeight: 'bold',
    },

    loginBotton: {        //estilo del botón      
     backgroundColor: '#006fcc', 
        borderRadius: 40,
        marginTop: 17,
        height:47,
        width:120,
        justifyContent: 'center', 
    },
    loginBottonText: {    //texto del botón
        fontSize: 17,        
        color: '#ffffff',    
        textAlign: 'center',
    },



    
   
})

export default FirstScreen