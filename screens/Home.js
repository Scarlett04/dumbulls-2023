import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Swiper from 'react-native-deck-swiper'
import { firebase } from '../config'

const Home = () => {
    const navigation = useNavigation()
    const [courses, setCourses] = useState([])
    const sessions = firebase.firestore().collection('sessions')

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{right:15, bottom:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
              <Ionicons name="chatbubbles-sharp" size={40} color='darkseagreen'/>
            </TouchableOpacity>
          </View>
        )
      })
    }, [])

    useEffect(() => {
      sessions
      .onSnapshot((querySnapshot) => {
        const courses = []
        querySnapshot.forEach((doc) => {
          const { photoURL, course, title, time, location, description, college, department, tag } = doc.data()
          courses.push({
            id: doc.id,
            photoURL,
            course,
            title,
            time,
            location,
            description,
            college,
            department,
            tag
          })
        })
        setCourses(courses)
      })
    }, [])

    return (
      <>
      {/* Display Cards */}
      <View>
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <View>
              <Text>{item.photoURL}</Text>
              <Text>{item.course}</Text>
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
              <Text>{item.location}</Text>
              <Text>{item.description}</Text>
              <Text>{item.match}</Text>
            </View>
          )}
        />
      </View>

      {/* Bottom Navigator */}
      <View style={{position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
        <Button title="Go to Explore" onPress={() => navigation.navigate('Explore')} />
        <Button title="Go to MyRoom" onPress={() => navigation.navigate('MyRoom')} />
        <Button title="Go to Account" onPress={() => navigation.navigate('Account')} />
      </View>
      
      <View style={{position: 'absolute', bottom: 0, right: 20, bottom: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('NewCard')}>
          <Ionicons name="add-circle-sharp" size={50} color='darkseagreen'/>
        </TouchableOpacity>
      </View>

      </>
  )
}

export default Home