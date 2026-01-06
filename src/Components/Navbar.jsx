import React, { useEffect } from 'react'
import { navLinks } from '../../constants'

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);



function Navbar() {
  useEffect(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",  
      start: "top top",
    toggleActions: "play none none reverse"
    }
  })

navTween.to(
  "nav",
  {
    backgroundColor: "rgba(0,0,0,0.5)", 
    backdropFilter: "blur(5px)",
    duration: 0.6,
    ease: "power1.inOut",
  }
)
}, [])



  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo (1).png" alt="logo " />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>


        </div>
    </nav>
  )
}

export default Navbar