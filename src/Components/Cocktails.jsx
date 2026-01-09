import React, { useEffect } from 'react'
import { cocktaillists, mocktaillists } from '../../constants'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import { Element } from 'react-scroll'


gsap.registerPlugin(ScrollTrigger)

function Cocktails() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      const leaftl = gsap.timeline({
        scrollTrigger: {
          trigger: '#cocktails',
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: true,
        }
      })

      leaftl
        .from('.c-left-leaf', { x: -100, y: 100 })
        .from('.c-right-leaf', { x: 100, y: -100 })
    })
  }, [])




  return (
    <Element name='cocktails'>
    <section id='cocktails' className='noisy'>
        <img src="/images/leaf.png" alt="l-leaf" className='c-left-leaf'/>
        <img src="/images/leaf.png" alt="r-leaf" className='c-right-leaf'/>


        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Cocktails:</h2>
                <ul>
                    {cocktaillists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>- {drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
                <h2>Most Popular Mocktails:</h2>
                <ul>
                    {mocktaillists.map((drinks)=>(
                        <li key={drinks.name}>
                            <div className='md:me-28'>
                                <h3>{drinks.name}</h3>
                                <p>{drinks.country} | {drinks.detail}</p>
                            </div>
                            <span>- {drinks.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>


    </section>
    </Element>
  )
}

export default Cocktails