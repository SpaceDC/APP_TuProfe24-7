import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import firebase from '../database/firebase'

const CreateUserScreen = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value });
    };

    const saveNewUser = async () => {
        if(state.name == '' || state.email == '' || state.phone == ''){
            alert('Por favor, digite todas las entradas solicitadas')
        }else {
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone,
            })
            //console.log(state) //muestra en consola el dato almacenado
            alert('Saved')
        }
    }

    /*function storeHighScore() {
        firebase
          .database()
          .ref('users/' + state.name)
    }*/

    return (
        <ScrollView style ={styles.container}>

            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Name User"
                    onChangeText={(value) => handleChangeText('name', value)}
                />
            </View>

            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Email User"
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>

            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder="Phone User"
                    onChangeText={(value) => handleChangeText('phone', value)}
                />
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => saveNewUser()}
                    style={styles.boton}>
                    <Text style={styles.textBoton}>Save User</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textBoton: {
        fontSize: 20, color: '#fff', textAlign: 'center', textAlignVertical: 'center'
    },

    boton: {
        backgroundColor: 'cyan', borderRadius: 40
    },

    container: {
        flex:1,
        padding:35
    },

    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUserScreen