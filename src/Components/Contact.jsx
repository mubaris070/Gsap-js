 import React, { useEffect } from 'react'
import { openingHours } from '../../constants';
import { Instagram, Facebook, Twitter } from "lucide-react";
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { Element } from 'react-scroll';

gsap.registerPlugin(SplitText,ScrollTrigger)
 
function Contact() {

      useEffect(()=>{
        const titlesplit = SplitText.create('#contact h2',{
            type:'words'});
        const ftl = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            },
            ease:'power1.inOut'
        })
        ftl
        .from(titlesplit.words,{
            opacity:0,yPercent:100,stagger:0.02
        })
        .from('#contact h3, #contact p',{
            opacity:0,yPercent:100,stagger:0.02
        })
        .from('.drink-img',{
            opacity:0,xPercent:100,duration:0.5,stagger:0.02
        },'-=0.5')
      },[])

  return (
    <Element name='contact'>
    <footer id="contact">
      <img id="f-left-leaf" src="/images/leaf.png" alt="" />
      <img id="f-right-leaf" src="/images/leaf.png" alt="" />

      <div className='content'>
        <h2>Where to Find Us</h2>

        <div>
            <h3>Visit Our Cocktail Lounge</h3>
            <p>456, Raq Blvd. #404, Los Angles, CA 90210</p>
        </div>

        <div>
            <h3>Contact Us</h3>
            <p>(555) 987-6543</p>
            <p>velvetpour@mocktail.com</p>
        </div>

        <div>
            <h3>Open Every Day</h3>
            {openingHours.map((time)=>(
             <p key={time.day}>{time.day}:{time.time}</p>
            ))}
        </div>

      <div className="flex flex-col gap-4">
  <h3>Socials</h3>
  <div className="flex gap-5 justify-center">
    <Instagram className="w-6 h-6 cursor-pointer hover:text-yellow transition-colors" />
    <Facebook className="w-6 h-6 cursor-pointer hover:text-yellow transition-colors" />
    <Twitter className="w-6 h-6 cursor-pointer hover:text-yellow transition-colors" />
  </div>
</div>

            
      </div>

      <img src="/images/f-img.png" alt="footer-img" className='drink-img' />
<hr className="w-full border-t border-white/60 mb-8" />

   
    </footer>
    </Element>
  );
}

 
 export default Contact