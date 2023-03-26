import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { View, Text, Button, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-deck-swiper'
import { firebase, db } from '../config'
import useAuth from '../hooks/useAuth'

const Home = () => {
  const navigation = useNavigation()
  const [courses, setCourses] = useState([])
  const { tag } = useAuth()
  const swipeRef = useRef(null)
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
    let unsubscribe;

    const fetchCourses = async () => {
      unsubscribe = sessions.onSnapshot((querySnapshot) => {
        setCourses(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
        )
    })
    }
    fetchCourses()
    return unsubscribe
  }, [])

  console.log(courses)

  return (
    <>
    <View>
      <Swiper
        ref={swipeRef}
        containerStyle={{ backgroundColor: 'transparent', height: '75%' }}
        cards={
          courses.filter((course) => course.tag === tag).length > 0
            ? courses.filter((course) => course.tag === tag)
            : courses
        }
        stackSize={1}
        stackSeparation={5}
        infinite = {true}
        animateCardOpacity
        verticalSwipe={false}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                top: -25,
                textAlign: 'right',
                color: 'red',
              },
            },
          },
          right: {
            title: 'JOIN',
            style: {
              label: {
                top: -25,
                textAlign: 'left',
                color: 'green',
              },
            },
          },
        }}
        onSwipedRight={(cardIndex) => {
          console.log("swipedRIGHT on " + cardIndex)
        }}
        onSwipedLeft={(cardIndex) => {
          console.log("swipedLEFT on " + cardIndex)
        }}
        renderCard={(card) => (
          card ? (
          <View key={card.room} style={{ position: 'relative', backgroundColor: 'transparent', height: '75%' }}>
            <Image
              style={{ position: 'absolute', top: -25, height: '100%', width: '100%', borderRadius: 20 }}
              source={{ uri: card.photoURL }}
            />

            <View
              style={{ position: 'absolute', bottom: -25, width: '100%', height: 100, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, backgroundColor: 'white' }}
            >
              <Text>{card.course}</Text>
              <Text>{card.time}</Text>
              <Text>{card.description}</Text>
            </View>
          </View>
          ) : (
            <View style={{ position: 'relative', backgroundColor: 'transparent', height: '75%' }}>
              <Image
                style={{ position: 'absolute', top: -25, height: '100%', width: '100%', borderRadius: 20,  }}
                source={require('../assets/icon.png')}
              />

              <View
                style={{ position: 'absolute', bottom: -25, width: '100%', height: 100, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, backgroundColor: 'white' }}
              >
                <Text>LOADING</Text>
              </View>
            </View>
          )
        )} />
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