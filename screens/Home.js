import React, { useLayoutEffect } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-deck-swiper'
import COURSES from '../database/courses'

const Home = () => {
    const navigation = useNavigation()

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

    return (
      <>
      <View>
        <View>
          {/*Cards*/}
          <Swiper
            cards={COURSES}
            stackSize={3}
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
            onSwipedRight={(card) => {
              console.log("swipedRIGHT on " + card)
            } }
            onSwipedLeft={(card) => {
              console.log("swipedLEFT on " + card)
            } }
            renderCard={(card) => (
              <View key={card.room} style={{ position: 'relative', backgroundColor: 'transparent', height: '75%' }}>
                <Image
                  style={{ position: 'absolute', top: -25, height: '100%', width: '100%', borderRadius: 20 }}
                  source={require('../assets/image.png')} />

                <View
                  style={{ position: 'absolute', bottom: -25, width: '100%', height: 100, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, backgroundColor: 'white' }}
                >
                  <Text>{card.course}</Text>
                  <Text>{card.time.toLocaleString(options = { second: 'none' })}</Text>
                  <Text>{card.description}</Text>
                </View>
              </View>
            )} />
        </View>
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