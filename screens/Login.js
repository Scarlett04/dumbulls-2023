import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const {login} = useAuth()
  
  return (
    <SafeAreaView style={{alignItems: 'center', top: '75%'}}>
      <Button title="Login" onPress={ login }/>
    </SafeAreaView>
  )
}

export default Login