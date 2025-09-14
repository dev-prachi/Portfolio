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
            <h3>Music Player Project</h3>
            <small className='text-light'> HTML | CSS | Js</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/dev-prachi/Music-Player-Project" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://dev-prachi.github.io/Music-Player-Project/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Here</a>
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
            <h3>Notes App Project</h3>
            <small className='text-light'>ReactJs | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/dev-prachi/NotesApp" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://dev-prachi.github.io/NotesApp/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
         <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG3} alt="" /> */}
            </div>
            <h3>Snake Game Project</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/dev-prachi/Snake-Game-Project" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://dev-prachi.github.io/Snake-Game-Project/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG3} alt="" /> */}
            </div>
            <h3>Dino Game Project</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/dev-prachi/Dino-Game-Project" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://dev-prachi.github.io/Dino-Game-Project/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG3} alt="" /> */}
            </div>
            <h3>Website Template </h3>
            <small className='text-light'>HTML | CSS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/dev-prachi/Clean-Work-Landing-Page" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://dev-prachi.github.io/Clean-Work-Landing-Page/#" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Projects