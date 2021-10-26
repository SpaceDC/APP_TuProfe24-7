
import React, {useState, useEffect} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Input } from 'react-native-elements';
import firebase from '../database/firebase'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';


const StartScreen = (props) => {

    const [state, setState] = useState({ //para guardar el estado de los campos de input
        email: '',    
        password: '',
    });

    //para cambiar el estado de la variable anterior al escribir en los campos de entrada
    const handleChangeText = (name, value) => { 
        setState({...state, [name]: value });
    };
    
    //para guardar la contraseña de la base de datos
    const [password, setPassword] = useState('');

    //guardar el nombre
    const [name, setName] = useState('');

    //realiza la consulta de la contraseña para el email ingresado para poderla comparar
    
    // para poder hacer la consulta a la db
     
    
    const [eye, setEye] = useState(false);         //para saber si está disponible visualizar la contraseña

    //controlar mensajes de error

    const [stateCredential, setStateCredential] = useState(true);
    const [stateCorreo, setStateCorreo] = useState(true);
    const [statePassword, setStatePassword] = useState(true);
    const [correctCredentials, setCorrectCredentials] = useState(true);

     //verificar el correcto ingreso de las credenciales 
    const login = () => {
        
    //se utilizan diferentes mensajes dependiendo del error al ingresar datos
    //campos sin llenar
        if(state.email == '' && state.password == '' ){
            setStateCredential(false)
            setStateCorreo(true)
            setStatePassword(true)
            setCorrectCredentials(true)
        }
        else if(state.email == ''){
            setStateCorreo(false)
            setStateCredential(true)
            setStatePassword(true)
            setCorrectCredentials(true)
        }
        else if(state.password == ''){
            setStatePassword(false)
            setStateCorreo(true)
            setStateCredential(true)
            setCorrectCredentials(true)
        }else{
            //contraseña correcta
            firebase.auth().signInWithEmailAndPassword(state.email, state.password).then(function (user) {
                console.log(state.email);
                if(state.email.search("teacher") === 0 || state.email.search("@profe24/7") === 0){
                    console.log('Credenciales correctas, ¡bienvenido teacher!');
                    props.navigation.navigate('FirstScreenTeacher',{name});
                }else {
                    console.log('Credenciales correctas, ¡bienvenido student!');
                    props.navigation.navigate('FirstScreen',{name});
                }
	        }).catch(function (error) {
		        console.log(error);
                alert('Credenciales incorrectas, por favor verifique los datos ingresados e intente nuevamente');
	        });
        }
            
    };
    return (
        <ScrollView style ={styles.container}> 
        {/*título*/}
            <View>  
                
                <Text style={styles.tittle}>Tu Profe 24/7</Text>
            </View>
            {/*Logo de la App*/}
            <Image        
                source={require('../assets/icon.png')}
                style={styles.image}
            />
         {/*Campo para ingresar correo electrónico*/}
            <View > 
                <Input style={styles.inputText}
                    placeholder="Correo electrónico"
                     //ícono de la izquierda
                    leftIcon={<Icon name='email' type="material-community" color='#006fcc' />}
                    //método que se ejecuta al ingresar texto
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>
        {/*mensaje de error si no se ingresa correo */}
        {stateCorreo ? null : <Text style={styles.errorText}>Campo obligatorio</Text>}  
            {/*campo de ingreo de contraseña*/}
            <View>
                 
             <Input style={styles.inputText}
                //ícono de la izquierda
                 leftIcon={<Icon name='lock' type="material-community" color='#006fcc'/>}
                //ícono de la derecha  (ojo)
                 rightIcon={
                      //botón que cambia su estado al ser presionado
                 <TouchableOpacity onPress={() => setEye(!eye)}>   
                   {/*para condigurar cuál imagen se muestra al presionar el ojo*/}
                    <View>
                      {eye ? <Icon name='eye' type="material-community"  color='#000000' />:
                      <Icon name='eye-off' type="material-community"  color='#000000' />}
                    </View>
                 </TouchableOpacity>}
                 //la contraseña se censura o no con cada click en el botón del ojo
                 secureTextEntry={!eye}
                placeholder="Contraseña"
                 //para almacenar el valor ingresado en el campo de texto
                 onChangeText={(value) => handleChangeText('password', value)}
             />
                
            </View>
        {/*mensaje de error si no se ingresa contraseña */}
        {statePassword ? null : <Text style={styles.errorText}>Campo obligatorio</Text>}
            {/*Fin campos para llenar*/}

            {/*Botón Inicio de sesión*/}
            <View>
                <TouchableOpacity
                    //
                    onPress={() => login()}
                    style={styles.blueBotton}>
                    <Text style={styles.blueBottonText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
               
            {/*mensaje de error si no se ingresa ningún campo */}
              {stateCredential ? null : <Text style={styles.errorText}>Campos sin llenar</Text>}
            {/*mensaje de error si se ingresan credenciales incorrectas */}
             {correctCredentials ? null : <Text style={styles.errorText}>Credenciales incorrectas</Text>}
              
             {/*Botón registro*/}
            <View>
                <TouchableOpacity
                     // al presionar el botón de registrarse debe llevarte a la pantalla de registro
                     //usamos props, el cual lo pusimos como parámetro al principio en startScreen
                    onPress={() => props.navigation.navigate('CreateUserScreen')}
                    style={styles.whiteBotton}>
                    <Text style={styles.whiteBottonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
             {/*Botón de recuperar contraseña*/}
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('RecoverPassword')}
                    style={styles.forgotPasswordBotton}>
                    <Text style={styles.forgotPasswordBottonText}>Olvidé mi contraseña</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


    )
}

//estilos
const styles = StyleSheet.create({

    container: {      //estilo general (del scrollview)
        flex: 1,
        paddingTop: 0,                 //margen superior
        paddingHorizontal: '20%',
        backgroundColor: '#ffffff', 
    },
    blueBottonText: {       //texto del botón azul
        fontSize: 19,        
        color: '#ffffff',    
        textAlign: 'center',  //letra centrada
    },
    blueBotton: {        //estilo del botón azul
        backgroundColor: '#006fcc', 
        borderRadius: 40,
        marginTop: 17,
        height:47,
        justifyContent: 'center',  
    },
    whiteBottonText: {    //texto del botón blanco
        fontSize: 19, 
        color: '#006fcc', 
        textAlign: 'center',              
    },
    whiteBotton: {        //estilo del botón blanco
        backgroundColor: '#ffffff', 
        borderRadius: 40,
        marginTop: 17,
        height:47,
        justifyContent: 'center',
        borderWidth:2,            //tamaño del borde
        borderColor: '#006fcc',
    },

    forgotPasswordBotton: {        //estilo del botón      
        marginTop: 1,
        height:47,
        justifyContent: 'center',
        
    },
    forgotPasswordBottonText: {    //texto del botón
        fontSize: 17, 
        color: '#006fcc', 
        textAlign: 'center',  
        textDecorationLine: 'underline',
    },

    inputText: {   //modifica el texto de entrada       
        fontSize: 17,  
    },

    tittle:{      //estílo del título
        color: '#006fcc',
        fontSize:22,
        fontWeight: 'bold',
        marginBottom: 35,
        alignSelf: 'center',
        marginTop: 70,
    },

    image: {         //estilo y tamaño del logo
        height: 230,
        width: 195,
        alignSelf: 'center',
        marginBottom: 20,
    },

    errorText:{

        fontSize: 14, 
        color: 'red', 
        textAlign: 'center',  
        textDecorationLine: 'underline',
    }
})

export default StartScreen
{/*


import React, { useState } from 'react'
import { View, Text , TouchableOpacity, StatusBar, Image} from 'react-native'
import { loginStyles } from '../components/styles'
import color from '../components/colors'
import MyTextInput from '../components/MyTextInput'

export default function StartScreen (){

  const [hidePassword, setHidePassword] = useState(true)

    return (
        <View style={loginStyles.container}>
          
          <StatusBar backgroundColor={color.BLUE} translucent={true}/>
          <View style={loginStyles.logo}>
            <Image source={require('../assets/icon.png')}
            style={{height:275, width:250}}/>
        </View>

        <View style={loginStyles.head}>
            <Text style={loginStyles.txtHead}>Tu Profe 24/7</Text>
        </View>

        <MyTextInput keyboradType='email-adress' placeholder='Correo electrónico' image='user-circle'/>
        <MyTextInput keyboradType={null} placeholder='Contraseña' image='lock'
        bolGone={true} secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}/>

        <View style={loginStyles.btnMain}>
          <TouchableOpacity>
            <Text style={[loginStyles.btntxt, {color: color.WHITE}]}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={loginStyles.btnTransparent}>
          <TouchableOpacity>
            <Text style={[loginStyles.btntxt, {color: color.BLUE}]}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={[loginStyles.txtTransparent, {textDecorationLine: 'underline'}]}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View>
        
      </View>
  
    )
}
*/}
