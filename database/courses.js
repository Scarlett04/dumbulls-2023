{/* Format:
photoURL, course, title, time, location, description, match
- PhotoURL
- Course
- Title
- Time
- Location
- Description
- Match: { College, Department, Tags }
*/}

const COURSES = [
    {
        room: 1,
        photoURL: '',
        course: 'COP 2510',
        title: 'Programming Concepts',
        time: new Date('2023-03-31T10:00:00'),
        description: 'Quiz 1 review',
        match: {
            college: 'College of Engineering',
            department: 'Department of Computer Science and Engineering'
        }
    },
    {
        room: 2,
        photoURL: '',
        course: 'CCJ 4794',
        title: 'Environmental Criminology',
        time: new Date('2023-04-17T17:00:00'),
        description: 'Practice for FINAL EXAM!!!',
        match: {
            college: 'College of Behavioral and Community Sciences',
            department: 'Department of Criminology'
        }
    },
    {
        room: 3,
        photoURL: '',
        course: 'LIS 4365',
        title: 'Web Design Technologies',
        major: ['Information Systems', 'Information Technology'],
        time: new Date('2023-03-17T09:00:00'),
        description: 'Group project meeting',
        match: {
            college: 'College of Arts and Sciences',
            department: 'School of Information'
        }
    }
]

export default COURSES

