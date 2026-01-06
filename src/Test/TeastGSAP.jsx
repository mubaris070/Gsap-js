// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// export default function TeastGSAP() {
//   const box1 = useRef(null);
//   const box2 = useRef(null);
//   const box3 = useRef(null);
// let tl =useRef(null)
// const[isplay,setIsplay]=useState(false)
//   useEffect(() => {
//     tl.current = gsap.timeline({
//       repeat:-1, repeatDelay:1, yoyo:true,paused:true
//     });

//     tl.current.to(box1.current, {
//       x:250,
//       rotation:360,
//       borderRadius:'100%',
//       duration: 2,
//       ease: "back.inOut"
//     })
//     .to(box1.current,{
//       y:500,
//       scale:1.5,
//       rotation:360,
//       borderRadius:'100%',
//       duration:2,
//       ease:'back.inOut'
//     })
//     .to(box1.current, {
//       x:500,
//       scale:1,
//       rotation:360,
//       duration:2,
//       borderRadius:'15px',
//       ease: "back.inOut"
//     })
//   },[]);


//   const playing =()=>{
//     if(isplay){
//       tl.current.pause()
//       setIsplay(false)}
//       else{
//        tl.current.play()
//        setIsplay(true)
//       }
//     } 

//   return (
//     <div>
// <div className="flex gap-4">
//   <button onClick={playing} className={`px-4 py-2 rounded text-white ${
//   isplay ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
// }`}

// >{isplay ? 'Pause':"Start"}</button>

// </div>
//    <div
//   ref={box1}
//   className="w-32 h-32 bg-red-500 text-white flex items-center justify-center"
// >
//   Box 1
// </div>

// {/* <div
//   ref={box2}
//   className="w-32 h-32 bg-green-500 text-white flex items-center justify-center"
// >
//   Box 2
// </div>

// <div
//   ref={box3}
//   className="w-32 h-32 bg-yellow-500 text-white flex items-center justify-center"
// >
//   Box 3
// </div> */}
// </div>
//   );
// }
