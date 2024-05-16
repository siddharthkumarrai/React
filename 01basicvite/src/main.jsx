import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const myReactElementRendring = {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         other:'snother properties',
//     },
//     childreen:'click here to go google '
// }

// ReactDOM.createRoot(document.getElementById('root')).render(

//     myReactElementRendring

// )
const anothermyReactElementRendering = (
  <a href="https://www.google.com">i am a google</a>
)
 const anotherVariable ="siddharth kumar rai"
const myReactElementRendring3 = React.createElement(
    'a',
    {href:"https://www.google.com",somethoing:"nothing"},
    'click here',
    anotherVariable

)
ReactDOM.createRoot(document.getElementById('root')).render(

    myReactElementRendring3

)
