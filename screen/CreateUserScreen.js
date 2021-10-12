import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firebase from '../database/firebase'

function functionsignoutUser(props) {
	firebase.auth().signOut();
}

function CreateUserScreen(props) {

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const [eye, setEye] = useState(false); //para saber si está disponible visualizar la contraseña

    const [stateCredential, setStateCredential] = useState(true);
    //comprueba que los campos estén bien diligenciados y guarda en la base de datos 
    const saveNewUser = async () => {

        if (state.name == '' || state.email == '' || state.phone == '' || state.password == '' || state.confirmPassword == '') {
            setStateCredential(false);
        }

        //revisa si las contraseñas coinciden
        else if (state.password != state.confirmPassword) {
            alert('Las contraseñas no coinciden');
        } else if (state.password.length <= 8) {
            alert('La contraseña es insegura, recuerde ingresar más de 8 caracteres');
        } else if (state.email.search("@") === -1 || state.email.search(".") === -1 || state.email.search("co") === -1) {
            alert('Ingrese un correo electrónico válido');
        }

        else { //si todo está diligenciado bien, se lleva la información a la base de datos

            await firebase.auth().createUserWithEmailAndPassword(state.email, state.password).then(() => {
                alert('Registro exitoso');
                firebase.firestore().collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone,
                    //password: state.password,
                });
                props.navigation.navigate('StartScreen');
            }).catch(error => {
                if (error.code === 'auth/email-already-in-use')
                    alert('La dirección de correo electrónico ingresada se encuentra en uso');
                if (error.code === 'auth/invalid-email')
                    alert('Dirección de correo electrónico inválida');
                console.error(error); //puede ser modificado por una alerta al usuario
            });

            
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/*título*/}
            <Text style={styles.tittle}>Registro</Text>
            {/*Inicio campos para llenar*/}
            {/*campo para el nombre*/}
            <View>
                <Input style={styles.inputText}
                    //ícono de la izquierda
                    leftIcon={<Icon name='account' type="material-community" color='#006fcc' />}
                    placeholder="Nombre completo"
                    //guardar lo que se ingresa
                    onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            {/*campo para el correo*/}
            <View>
                <Input style={styles.inputText}
                    //ícono de la izquierda
                    leftIcon={<Icon name='email' type="material-community" color='#006fcc' />}
                    placeholder="Correo electrónico"
                    //guardar lo que se ingresa
                    onChangeText={(value) => handleChangeText('email', value)} />
            </View>

            {/*campo para el celular*/}
            <View>
                <Input style={styles.inputText}
                    //ícono de la izquierda
                    leftIcon={<Icon name='cellphone' type="material-community" color='#006fcc' />}
                    placeholder="Número de celular"
                    //guardar lo que se ingresa
                    onChangeText={(value) => handleChangeText('phone', value)} />
            </View>
            {/*campo de contraseña*/}
            <View>
                <Input style={styles.inputText}
                    //ícono de la izquierda
                    leftIcon={<Icon name='lock' type="material-community" color='#006fcc' />}
                    //ícono de la derecha  (ojo)
                    rightIcon={
                        //botón que cambia su estado al ser presionado
                        <TouchableOpacity onPress={() => setEye(!eye)}>
                            {/*para condigurar cuál imagen se muestra al presionar el ojo*/}
                            <View>
                                {eye ? <Icon name='eye' type="material-community" color='#000000' /> :
                                    <Icon name='eye-off' type="material-community" color='#000000' />}
                            </View>
                        </TouchableOpacity>}
                    //la contraseña se censura o no con cada click en el botón del ojo
                    secureTextEntry={!eye}
                    placeholder="Contraseña"
                    //para almacenar el valor ingresado en el campo de texto
                    onChangeText={(value) => handleChangeText('password', value)} />

            </View>
            {/*Campo de confirmar contraseña*/}
            <View>

                <Input style={styles.inputText}
                    //ícono de la izquierda
                    leftIcon={<Icon name='lock' type="material-community" color='#006fcc' />}
                    //ícono de la derecha  (ojo)
                    rightIcon={
                        //botón que cambia su estado al ser presionado
                        <TouchableOpacity onPress={() => setEye(!eye)}>
                            {/*para condigurar cuál imagen se muestra al presionar el ojo*/}
                            <View>
                                {eye ? <Icon name='eye' type="material-community" color='#000000' /> :
                                    <Icon name='eye-off' type="material-community" color='#000000' />}
                            </View>
                        </TouchableOpacity>}
                    //la contraseña se censura o no con cada click en el botón del ojo
                    secureTextEntry={!eye}
                    placeholder="Confirmar contraseña"
                    //para almacenar el valor ingresado en el campo de texto
                    onChangeText={(value) => handleChangeText('confirmPassword', value)} />

            </View>
            {/*Fin campos para llenar*/}

            {/*Botón de registro */}
            <View>
                <TouchableOpacity
                    onPress={() => saveNewUser()}
                    style={styles.blueBotton}>
                    <Text style={styles.blueBottonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            {/*mensaje de error si no se ingresa ningún campo */}
            {stateCredential ? null : <Text style={styles.errorText}>Campos sin diligenciar</Text>}
            {/*Ya tengo una cuenta*/}
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('StartScreen')}
                    style={styles.loginBotton}>
                    <Text style={styles.loginBottonText}>Ya tengo una cuenta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    );
}

    const styles = StyleSheet.create({

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

export default CreateUserScreen