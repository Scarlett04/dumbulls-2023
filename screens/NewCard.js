import { View, Text, TouchableOpacity  } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { db } from '../config'
import { collection, addDoc } from 'firebase/firestore'


const NewCard = () => {
  const navigation = useNavigation()

  const [photoURL, setPhotoURL] = React.useState('')
  const [course, setCourse] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [time, setTime] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [description, setDescription] = React.useState('')
  // const [college, setCollege] = React.useState('')
  // const [department, setDepartment] = React.useState('')
  // const [tag, setTag] = React.useState('')

  const incompleteForm = () => {
    return photoURL === '' || course === '' || title === '' || time === '' || location === '' || description === '' 
    {/*|| college === '' || department === '' || tag === ''*/}
  }

  const saveCard = async () => {
    const docRef = await addDoc(collection(db, 'sessions'), {
      photoURL: photoURL,
      course: course,
      title: title,
      time: time,
      location: location,
      description: description,
      // college: college,
      // department: department,
      // tag: tag,
      // user: firebase.auth().currentUser.uid
      // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log('Document written with ID: ', docRef.id)
    navigation.navigate('Home')
  }

  return (
    <View style={{top: 20, alignItems: 'center', flex: 1}}>
      <View style={{position: 'absolute', left: 10}}>

        <Text>Photo: </Text>
        <TextInput
          value={photoURL}
          onChangeText={text => setPhotoURL(text)}
          placeholder='Insert the URL for your photo'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Course: </Text>
        <TextInput
          value={course}
          onChangeText={text => setCourse(text)}
          placeholder='Enter the course name (e.g. COP 2510)'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Title: </Text>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder='Enter the title of your study session'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Date & Time: </Text>
        <TextInput
          value={time}
          onChangeText={text => setTime(text)}
          placeholder='Enter the date and time of your study session'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

        <Text>Location: </Text>
        <TextInput
          value={location}
          onChangeText={text => setLocation(text)}
          placeholder='Enter the location of your study session'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />
        
        <Text>Description: </Text>
        <TextInput
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder='Enter a description of your study session'
          style={{margin: 5, height: 40, borderColor: 'gray', width: '100%'}}
        />

      </View>

      <TouchableOpacity 
        disabled={incompleteForm()}
        style={{position: 'absolute', bottom: 100, height: 50, width: 300, alignItems: 'center', justifyContent: 'center'
        , backgroundColor: incompleteForm() ? 'gray' : 'coral'}}
        onPress={() => saveCard()}
      >
        <Text>Create New Card</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewCard