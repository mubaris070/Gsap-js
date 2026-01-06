// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollTriggerExample() {

//   useEffect(() => {
//     // Select all elements with class "box" and convert to array
//     const boxes = gsap.utils.toArray(".box");

//     gsap.from(boxes, {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3, // animate each one after 0.3s
//       scrollTrigger: {
//         trigger: boxes[0], // start animation when first box enters viewport
//         start: "top 80%",
//         toggleActions: "play none none reverse", // play on scroll down, reverse on scroll up
//         markers: true, // optional, shows start/end markers for debugging
//       },
//     });
//   }, []);

//   return (
//     <div style={{ height: "200vh" }} className="flex flex-col gap-40 mt-20">
//       <div className="box w-32 h-32 bg-red-500 mx-auto flex items-center justify-center">
//         Box 1
//       </div>
//       <div className="box w-32 h-32 bg-green-500 mx-auto flex items-center justify-center">
//         Box 2
//       </div>
//       <div className="box w-32 h-32 bg-blue-500 mx-auto flex items-center justify-center">
//         Box 3
//       </div>
//       <div className="box w-32 h-32 bg-yellow-500 mx-auto flex items-center justify-center">
//         Box 4
//       </div>
//     </div>
//   );
// }
