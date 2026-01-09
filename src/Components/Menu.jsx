import { useEffect, useState } from "react"
import { allcocktails } from "../../constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Element } from "react-scroll"
gsap.registerPlugin(ScrollTrigger)
function Menu(){

    const [currentIndex,setCurrentIndex] = useState(0)
     
     const totalcocktails = allcocktails.length
    function gotoSlide(index){
        const slide = (index + totalcocktails) % totalcocktails
        setCurrentIndex(slide)
    }

    function getcocktailAt(indexOffset){
        return allcocktails[(currentIndex + indexOffset +totalcocktails)%totalcocktails]
    }

    const currentcocktail = getcocktailAt(0)


useEffect(() => {
    const mtl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top center",
      }
    })

    mtl
      .fromTo(
        "#title",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power1.out" }
      )
      .fromTo(
        ".cocktail img",
        { opacity: 0, yPercent: -100 },
        { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" },'-=0.5'
      )
      .fromTo(
        ".detail h2",
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 0.8, ease: "power1.out" },'-=0.5'
      )
      .fromTo(
        ".details p",
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.04,
        },'-=0.5'
      )

}, [currentIndex])


 return (
  <Element name="menu">
	<section id="menu" aria-labelledby="menu-heading">
	 {/* <img src="/images/leaf.png" alt="left-leaf" id="c-left-leaf" /> */}
	 {/* <img src="/images/leaf.png" alt="right-leaf" id="c-right-leaf" /> */}
	 
	 <h2 id="menu-heading" className="sr-only">
		Cocktail Menu
	 </h2>

     <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allcocktails.map((cocktail,index)=>{
            const isActive = index === currentIndex

            return(
                <button key={cocktail.id} 
                className={`${isActive ? 'text-white border-white':'text-white/50 border-white/50'}`}
                onClick={()=>gotoSlide(index)}>{cocktail.name}</button>
            )
        })}
     </nav>

     <div className="content">
       <div className="cocktail">
        <img src={currentcocktail.image} alt="" className="object-contain"/>
       </div>
     </div>

     <div className="recipe">
     <div className="info">
        <p>Recipe for:</p>
        <p id="title">{currentcocktail.name}</p>    
     </div>

     <div className="details">
     <h2 className={currentcocktail.color}>{currentcocktail.title}</h2>
     <p>{currentcocktail.description}</p>
     </div>

     </div>
	
	</section>
  </Element>
 )
}
export default Menu



