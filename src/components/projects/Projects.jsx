import React from 'react'
import './projects.css'
// import IMG1 from '../../assets/img5.jpg'
// import IMG2 from '../../assets/img2.png'
// import IMG3 from '../../assets/img3.png'
// import IMG4 from '../../assets/img4.png'

const Projects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG1} alt="" /> */}
            </div>
            <h3>Dino Game</h3>
            <small className='text-light'> HTML | CSS | Js</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Developer-Swati/Dino-Game" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://developer-swati.github.io/Dino-Game/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Here</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG4} alt="" /> */}
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Developer-Swati/My-Portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/Developer-Swati/My-Portfolio" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG3} alt="" /> */}
            </div>
            <h3>Voice Maker</h3>
            <small className='text-light'>ReactJs | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Developer-Swati/voice-maker" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://developer-swati.github.io/voice-maker/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Projects