import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import firebase from '../database/firebase';
import auth from '@react-native-firebase/auth';
import { Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const RecoverPassword = (props) => {
    const[email, setEmail] = useState(null) //moficación de estados de correo
    const[errorEmail, setErrorEmail] = useState(null)
    const[loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if(email === null || email.search("@")===-1 || email.search(".")===-1 || email.search("co")===-1 && email.height>0){
            Alert.alert('Error','Campo inadmisible, ingrese un correo electrónico válido')
        }else{
            const result = await sendEmailResetPassword(email);

            if(!result.statusResponse) {
                Alert.alert("Error", "Este correo no se relaciona a ningún usuario")
                return
            }
            Alert.alert("Confirmación", "Se le ha enviado un email con las instrucciones para cambiar la contraseña")
            props.navigation.navigate('StartScreen')
        }
    }
    
    return (
        <ScrollView style ={styles.container}>
            <Text style={styles.tittle}>Recuperación de Contraseña</Text>
            <View >
                <Input style = {styles.inputText}
                    placeholder="Ingrese su e-mail"
                    onChangeText={(e) => setEmail(e)}
                    defaultValue={email}
                    errorMessage={errorEmail}
                    keyboardType="email-address"
                    leftIcon={
                        <Icon
                            type="material-community"
                            name="at"
                            color='#006fcc'
                        />
                    }
                />

                <TouchableOpacity
                    onPress={onSubmit}
                    style={styles.blueBotton}>
                    <Text style={styles.blueBottonText}>Recuperar contraseña</Text>
                </TouchableOpacity>
        
            </View>
                    
        </ScrollView>
    )
}

export const sendEmailResetPassword = async(email) => {
    const result = { statusResponse: true, error: null}
    try{
        await firebase.auth().sendPasswordResetEmail(email)
    }catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result
}

const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    inputForm: {
        width: '90%',
    },

    btnContainer: {
        marginTop: '20',
        width: '80%',
        alignSelf: 'center',
    },

    btnRecover: {
        backgroundColor: '#006fcc'
    },

    icon: {
        color: '#c1c1c1'
    },

    blueBottonText: {       //texto del botón azul
        fontSize: 19,        
        color: '#ffffff',    
        textAlign: 'center',  //letra centrada
    },
    blueBotton: {        //estilo del botón azul
        backgroundColor: '#006fcc', 
        borderRadius: 40,
        marginTop: 30,
        height:47,
        justifyContent: 'center',  
    },

   container: {      //estilo general (del scrollview)
        flex: 1,
        paddingTop: 25,                 //margen superior
        paddingHorizontal: '20%',
        backgroundColor: '#ffffff', 
    },

    inputText: {   //modifica el texto de entrada       
        fontSize: 17,  
    },

   tittle:{      //estílo del título
        color: '#006fcc',
        fontSize:22,
        fontWeight: 'bold',
        marginTop: 70,
        marginBottom: 60,
        alignSelf: 'center'
    },
    loginBotton: {        //estilo del botón      
        marginTop: 1,
        height:47,
        justifyContent: 'center',
        
    },
    loginBottonText: {    //texto del botón
        fontSize: 17, 
        color: '#006fcc', 
        textAlign: 'center',  
        textDecorationLine: 'underline',
    },
    errorText:{

        fontSize: 14, 
        color: 'red', 
        textAlign: 'center',  
        textDecorationLine: 'underline',
    }
})

export default RecoverPassword
