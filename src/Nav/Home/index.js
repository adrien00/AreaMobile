import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import request from '../../Helpers/request'
import { ImageBackground } from 'react-native';


const Home = () => {
  return (
    <TouchableOpacity onPress={() => Actions.settings()}>
      <Text>
        Settings
      </Text>
    </TouchableOpacity>
  )
}

export default Home