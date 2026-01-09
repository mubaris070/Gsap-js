// import { Element } from 'react-scroll'
// import Hero from './Hero'
// import Cocktails from './Cocktails'
// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import { useMediaQuery } from 'react-responsive'
 
// gsap.registerPlugin(ScrollTrigger)

// function HomePage() {
//   const vedioRef = useRef()
//   const isMobile = useMediaQuery({ maxWidth:767})



//   useEffect(()=>{


// const startvalue=isMobile ? 'top 50%' : 'center 60%';
// const endvalue=isMobile ? '120% top':'bottom top'

//     const tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:'video',
//         start:startvalue,
//         scrub:true,
//         pin:true
//     }
// })
//  vedioRef.current.onloadedmetadata =()=>{
//     tl.to(vedioRef.current, {
//         currentTime: vedioRef.current.duration 
//     })
//  }
//   },[])

//   return (
//     <div className="relative">

//       {/* SHARED BACKGROUND VIDEO */}
//       <div className="fixed inset-0 z-0">
//         <video
//           ref={vedioRef}
//           src="/vedios/input.mp4"
//           muted
//           playsInline
//           preload="auto"
//         />
//       </div>

//       <Element name="home">
//         <Hero />
//       </Element>

//       <Element name="cocktails">
//         <Cocktails />
//       </Element>

//     </div>
//   )
// }

// export default HomePage
