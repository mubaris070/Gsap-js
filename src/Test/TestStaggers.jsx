// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function TestStaggers() {
//   const containerRef = useRef(null);

// useEffect(() => {
//   gsap.from(containerRef.current.children, {
//     y: 100,
//     rotation: 360,
//     borderRadius: "100%",
//     repeat: -1,
//     yoyo: true,
//     duration: 1.2,
//     stagger: {
//       amount: 1.5,
//       from: "center",
//       ease: "circ.inOut"
//     }
//   });
// }, []);


//   return (
//     <div ref={containerRef} className="flex gap-4">
//       <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center">1</div>
//       <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center">2</div>
//       <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center">3</div>
//       <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center">4</div>
//     </div>
//   );
// }
