import { View, Text, Touchable, TouchableOpacity  } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import COURSES from '../database/courses'
import { useNavigation } from '@react-navigation/native'

const NewCard = () => {
  const navigation = useNavigation()

  const [photo, setPhoto] = React.useState('')
  const [course, setCourse] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [time, setTime] = React.useState('')
  const [description, setDescription] = React.useState('')

  const incompleteForm = () => {
    return photo === '' || course === '' || title === '' || time === '' || description === ''
  }

  const createNewCard = () => {
    const newCard = {
      room: COURSES.length + 1,
      photoURL: photo,
      course: course,
      title: title,
      time: new Date(time),
      description: description
      }
    COURSES.push(newCard)
    console.log(COURSES)
    console.log('New card created!')
    navigation.navigate('Home')
    }

  return (
    <View style={{top: 20, alignItems: 'center', flex: 1}}>
      <View style={{position: 'absolute', left: 10}}>

        <Text>Photo: </Text>
        <TextInput
          value={photo}
          onChangeText={text => setPhoto(text)}
          placeholder='Insert the URL for your photo'
          style={{height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Course: </Text>
        <TextInput
          value={course}
          onChangeText={text => setCourse(text)}
          placeholder='Enter the course name (e.g. COP 2510)'
          style={{height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Title: </Text>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder='Enter the title of your study session'
          style={{height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Date & Time: </Text>
        <TextInput
          value={time}
          onChangeText={text => setTime(text)}
          placeholder='Enter the date and time of your study session'
          style={{height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Description: </Text>
        <TextInput
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder='Enter a description of your study session'
          style={{height: 40, borderColor: 'gray', width: '100%'}}
        />

      </View>

      <TouchableOpacity 
        disabled={incompleteForm()}
        style={{position: 'absolute', bottom: 100, height: 50, width: 300, alignItems: 'center', justifyContent: 'center'
        , backgroundColor: incompleteForm() ? 'gray' : 'coral'}}
        onPress={() => createNewCard()}
      >
        <Text>Create New Card</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewCard