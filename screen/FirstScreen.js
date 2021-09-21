import React, {Component} from 'react';
import { Button, Text, ViewPagerAndroidBase, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';

{/* code*/}
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'


{/*code2 */}

const HomeScreen= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.container}>Home screen</Text>
    </View>
  );
}

const ProfilesScreen= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.container}>Profiles</Text>
    </View>
  );
}

const SettingsScreen= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.container}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

const Tab = createBottomTabNavigator();

export default class FirstScreen extends React.Component {
  tabs = [
    {
      key: 'homes',
      icon: 'home',
      label: 'Home',
      screen: <Tab.Screen name="Home" component={HomeScreen} />,
      barColor: '#0e319c',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'search',
      icon: 'search',
      label: 'Search',
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
          {/* Your screen contents depending on current tab. */}
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

