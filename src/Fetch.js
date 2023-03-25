// // import { View, Text, FlatList } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { firebase } from '../config'

// const Fetch = () => {
  
//   const [courses, setCourses] = useState([])
//   const sessions = firebase.firestore().collection('sessions')

//   useEffect(() => {
//     sessions
//     .onSnapshot((querySnapshot) => {
//       const courses = []
//       querySnapshot.forEach((doc) => {
//         const { photoURL, course, title, time, location, description, college, department, tag } = doc.data()
//         courses.push({
//           id: doc.id,
//           photoURL,
//           course,
//           title,
//           time,
//           location,
//           description,
//           college,
//           department,
//           tag
//         })
//       })
//       setCourses(courses)
//     })
//   }, [])

//   return (
//     courses
//     // data={courses}
//     // <View>
//     //   <FlatList
//     //     data={courses}
//     //     renderItem={({ item }) => (
//     //       <View>
//     //         <Text>{item.photoURL}</Text>
//     //         <Text>{item.course}</Text>
//     //         <Text>{item.title}</Text>
//     //         <Text>{item.time}</Text>
//     //         <Text>{item.location}</Text>
//     //         <Text>{item.description}</Text>
//     //         <Text>{item.match}</Text>
//     //       </View>
//     //     )}
//     //   />
//     // </View>
//   )
// }

// export default Fetch