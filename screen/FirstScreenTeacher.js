import React, {Component,useState} from 'react';
import { Button, Text, ViewPagerAndroidBase, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import BottomNavigation, {
FullTab} from 'react-native-material-bottom-navigation'
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import auth from '@react-native-firebase/auth';
import firebase from '../database/firebase'

//----------------------//

const functionsignoutUser = (props) => {
	firebase.auth().signOut();
  props.navigation.navigate('StartScreen'); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle:{      //estílo del título
    color: '#006fcc',
    fontSize:22,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 60,
    alignSelf: 'center'
  },
  whiteBottonText: {    //texto del botón blanco
    fontSize: 19, 
    color: '#006fcc', 
    textAlign: 'center',              
  },
  whiteBotton: {        //estilo del botón blanco
    backgroundColor: '#fffff367', 
    borderRadius: 20,
    marginTop: 42,
    height: 40,
    width: 85,
    justifyContent: 'center',
    borderWidth: 2,            //tamaño del borde
    borderColor: '#006fcc',
    alignSelf: 'flex-end'
},
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
}
  
});

const Tab = createBottomTabNavigator();

class FirstScreenTeacher extends React.Component {
  
  tabs = [
    {
      key: 'homes',
      icon: 'home',
      label: 'Home',
      barColor: '#0e319c',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'adds',
      icon: 'add',
      label: 'Add',
      barColor: '#1369ab',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'message',
      icon: 'message',
      label: 'Message',
      barColor: '#0e5880',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  state = {
    activeTab: 'homes'
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.activeTab === 'homes' ? //****Acción si estoy en Home*******/
              <View>
                {this.props.navigation.navigate('HomeScreen') /*Tener en cuenta para la funcionalidad de los post*/}
                <TouchableOpacity
                    //usamos props
                    onPress={() => functionsignoutUser(this.props)}
                    style={styles.whiteBotton}>
                 <Text style={styles.whiteBottonText}>Salir</Text>
                </TouchableOpacity>
              </View> : null ||
          
          this.state.activeTab === 'adds' ? //****Acción si estoy en Adds*******/
              <View>
                {this.props.navigation.navigate('Add')}
              </View> : null ||

           this.state.activeTab === 'message' ? //****Acción si estoy en Message*******/
            <View>

              <TouchableOpacity //User01
                  onPress={() => this.props.navigation.navigate('Chat')}
                  style={styles.whiteBotton}>
               <Text style={styles.whiteBottonText}>TUser1</Text>
              </TouchableOpacity>

              <TouchableOpacity //User02
                  onPress={() => this.props.navigation.navigate('Chat2')}
                  style={styles.whiteBotton}>
               <Text style={styles.whiteBottonText}>TUser2</Text>
              </TouchableOpacity>
            </View> : null
              }
      </View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )
  }
}

const styles2 = StyleSheet.create({
  container: {
      flex: 1,
  },
  containerInfo: {
      margin: 20
  },
  containerGallery: {
      flex: 1
  },
  containerImage: {
      flex: 1 / 3

  },
  image: {
      flex: 1,
      aspectRatio: 1 / 1
  }
})

export default FirstScreenTeacher

