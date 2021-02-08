import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {WriteStoryScreen} from './screens/WriteStoryScreen'
import {ReadStoryScreen} from './screens/ReadStoryScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={{
         flex: 1,
          justifyContent: 'center', 
          alignItems: 'center' 
          }}>
        <Text> WriteStory </Text>
      </View>
    );
  }
}

class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={{
         flex: 1,
          justifyContent: 'center',
           alignItems: 'center' 
           }}>
        <Text> ReadStory </Text>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});