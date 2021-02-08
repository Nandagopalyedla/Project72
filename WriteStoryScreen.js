import React from 'react';
import { Stylesheet, View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

<TouchableOpacity
style = {style.submitButton}
onPress = {this.submitStory}   
>
    <Text style = {styles.buttonText}>Submit</Text>
</TouchableOpacity>