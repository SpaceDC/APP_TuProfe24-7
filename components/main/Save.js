import React, { useState } from 'react'
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native'

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
require("firebase/firestore")
require("firebase/firebase-storage")


export default function Save (props) {
    const [caption, setCaption] = useState("")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath)

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
        
    }

    const savePostData = (downloadURL) => {

        firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection('userPosts')
            .add({
                downloadURL,
                caption,
                likesCount: 0,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
                Alert.alert("Información", "Publicación subida con éxito");
                console.log("Uploading completed");
            }))
    }
    return (
        <View style={ styles.container }>
            <Image 
                style={{ 
                    width: 210,
                    height: 250,
                    borderWidth: 2,
                    borderColor: "#1369ab",
                    resizeMode: "contain",
                    margin: 6, 
                    marginBottom: 20 }}
                source={{ uri: props.route.params.image }} 
            />
            <TextInput style={styles.inputText}
                placeholder="Escriba una descripción"
                onChangeText={(caption) => setCaption(caption)}/>
            <TouchableOpacity
                onPress={() => uploadImage()}
                style={styles.blueBotton}>
                <Text style={styles.blueBottonText}>Publicar</Text>
            </TouchableOpacity>
        </View>
    )
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
        paddingTop: 30,                 //margen superior
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
