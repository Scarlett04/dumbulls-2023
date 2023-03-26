import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'

const Account = () => {
  const { user, tag, setNewTag } = useAuth()
  const [category, setCategory] = React.useState('')
  const navigation = useNavigation()

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
        <Picker
          selectedValue={category}
          style={{ height: 40, width: 300 }}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item value="" />
            {['Business', 'Global Sustainability', 'Health', 'Culture',
              'Natural Science', 'Behavioral', 'Civil Engineering',
              'Communication', 'Technology', 'Criminology', 'Education',
              'Electrical & Mechanical Engineering'].map((option) => (
              <Picker.Item label={option} value={option} key={option} />
            ))}
          </Picker>
      </View>

      <TouchableOpacity 
        style={{height: 50, width: 300, top: "50%", alignItems: 'center', justifyContent: 'center', backgroundColor: 'coral'}}
        onPress={() => saveTag(category)}
      >
        <Text>Change Your Tag</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default Account