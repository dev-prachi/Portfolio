import React from 'react';
import Certi1 from '../../assets/AWS-cloud-comp-cer.pdf';
import Certi2 from '../../assets/GSSOC certificate.pdf'
import img1 from '../../assets/AWS_AI.PNG'

const Certificate = () =>{
return (
    <section id='mycertificates'>

<h5>My Achievements</h5>
<h2>Certificates</h2>

<div className="container portfolio__container">

  <article className='portfolio__item'>
      <h3>AWS Cloud Computing</h3>
      <small className='text-light'>Explored about AWS fundamental and Cloud Computing</small>
      <div className="portfolio__item-cta">
      <a href={Certi1} download className='btn btn-primary'>Download CV</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>AWS AI conclave certificate</h3>
      <small className='text-light'>Learnt about AWS , Generative AI, Machine Learning and many more </small>
      <div className="portfolio__item-cta">
      <a href={img1} download className='btn btn-primary'>Download CV</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>GSSOC open source certificate</h3>
      <small className='text-light'>Contibuted to Frontend projects , fixed bugs , improved features and resolved issues.</small>
      <div className="portfolio__item-cta">
      <a href={Certi2} download className='btn btn-primary'>Download CV</a>
      </div>   
  </article>
  </div>
</section>
);
}

export default Certificate;