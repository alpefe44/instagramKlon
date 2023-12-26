import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Instagram</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textinput} placeholder='Phone number, username or email'></TextInput>
        <TextInput style={styles.textinput} placeholder='Password'></TextInput>
        <Text style={styles.textForgotPass}>Forgot Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.replace("App")} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orButton}>
          <Text style={styles.buttonText2}>OR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput: {
    borderWidth: .2,
    paddingHorizontal: 10
  },
  titleContainer: {
    padding: 15
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 32
  },
  textForgotPass: {
    textAlign: 'right',
    color: '#23b0fb'
  },
  textInputContainer: {
    width: '90%',
    gap: 8,
    padding: 5,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 10,
    gap: 15
  },
  button: {
    backgroundColor: '#23b0fb',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  orButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonText2: {
    color: '#929292',
    fontWeight: 'bold'
  }
})

export default LoginPage