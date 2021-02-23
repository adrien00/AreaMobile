import React, { useState } from 'react'
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
  const [address, setAddress] = useState('')
  const [port, setPort] = useState('')

  const handleSubmit = () => {
    global.backendUrl = `http://${address}:${port}`
    Actions.login()
  }

  return (
    <View>
      <Text style={styles.logo}>Connect to server</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Address..."
          placeholderTextColor="#003f5c"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Port..."
          placeholderTextColor="#003f5c"
          value={port}
          onChangeText={text => setPort(text)}/>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Validate</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default Login