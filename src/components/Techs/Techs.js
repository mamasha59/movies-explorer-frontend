import React from "react";
import './Techs.css'
function Techs(){
    return(
        <section className='techs' id='about'>
            <div className='techs__container common-container'>
                <p className='techs__episode common-title-episode'>Технологии</p>
                  <div className='techs__block-text'>
                      <div className='techs__title'>7 технологий</div>
                      <div className='techs__subtitile'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</div>
                  </div>
                  <ul className='techs__technologies'>
                      <li className='techs__technology'>HTML</li>
                      <li className='techs__technology'>CSS</li>
                      <li className='techs__technology'>JS</li>
                      <li className='techs__technology'>React</li>
                      <li className='techs__technology'>Git</li>
                      <li className='techs__technology'>Express.js</li>
                      <li className='techs__technology'>mongoDB</li>
                  </ul>
            </div>
    
    </section>
    );
}
export default Techs;