// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import {TextPlugin} from 'gsap/TextPlugin'


// gsap.registerPlugin(TextPlugin)

// function Gsaptext() {
//     const textRef = useRef(null)

//     useEffect(()=>{
//      gsap.from(textRef.current,{
//         duration:3,
//         text:"Hello world",
//         ease:'none'
//      }
//      )
//     },[])



//   return (
//     <div className='flex justify-center items-center h-screen'>
//         <h1 ref={textRef} className='text-3xl font-semibold text-blue-500'>Typing......</h1>
     
//     </div>
//   )
// }

// export default Gsaptext