import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const { user, tag, setNewTag } = useAuth()
  const [category, setCategory] = React.useState('')
  const navigation = useNavigation()

  const incompleteForm = () => {
    return category === ''
  }

  const saveTag = (tag) => {
    setNewTag(tag)
    console.log('Change tag to ' + tag + '!')
    Alert.alert(
      'Tag Updated',
      'The tag has been updated to ' + tag,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed')
            navigation.navigate('Home')
          }
        }
      ]
    )
  }

  return (
    <>
    <View>
      <Text>Account</Text>
      <Text>{user}</Text>
      <Text>{tag}</Text>
      <Text></Text>
    </View>

    <View style={{alignItems: 'center', flex: 1}}>
      <View style={{position: 'absolute', left: 10}}>
        <Text>Choose a new tag:</Text>
        <TextInput
          value={category}
          onChangeText={text => setCategory(text)}
          placeholder='What would you like to study?'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

        <TouchableOpacity 
          disabled={incompleteForm()}
          style={{height: 50, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: incompleteForm() ? 'gray' : 'coral'}}
          onPress={() => saveTag(category)}
        >
          <Text>Change Your Tag</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default Account