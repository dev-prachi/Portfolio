import React from 'react';
import Certi1 from '../../assets/Google-cloud-certificate.png';
import Certi2 from '../../assets/GSSoC badge.jpg'
import img1 from '../../assets/Postman-certificate.png'

const Certificate = () =>{
return (
    <section id='mycertificates'>

<h5>My Achievements</h5>
<h2>Certificates</h2>

<div className="container portfolio__container">

  <article className='portfolio__item'>
      <h3>Google Cloud Skill Badge in Prompt Design in Vertax AI</h3>
      <small className='text-light'>Explored about Prompt Designing in Vertax AI</small>
      <div className="portfolio__item-cta">
      <a href={Certi1} download className='btn btn-primary'>Download Certificate</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>Postman API Fundamentals Student Expert Certificate and Badge</h3>
      <small className='text-light'>Learned about the Fundamentals of API. </small>
      <div className="portfolio__item-cta">
      <a href={img1} download className='btn btn-primary'>Download Certificate</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>GSSOC open source Contributor Badge</h3>
      <small className='text-light'>Contributing to Frontend projects , fixed bugs , improved features and resolved issues.</small>
      <div className="portfolio__item-cta">
      <a href={Certi2} download className='btn btn-primary'>Download Certificate</a>
      </div>   
  </article>
  </div>
</section>
);
}

export default Certificate;