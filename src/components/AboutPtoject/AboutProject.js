import React from "react";
import './AboutProject.css'

function AboutProject(){
    return(
        <section className='about'>
            <div className='about__container common-container'>
            <p className='about__episode common-title-episode'>О проекте</p>

            <div className='about__text-container'>
               <div className='about__diploma'>
                 <div className='about__diploma-title'>Дипломный проект включал 5 этапов</div>
                     <p className='about__diploma-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
               </div>
               <div className='about__time'>
                 <div className='about__diploma-title'>На выполнение диплома ушло 5 недель</div>
                     <p className='about__diploma-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
               </div>
            </div>

            <div className='about__chart'>
                    <div className='about__chart-time about__chart-green'>1 неделя</div>
                    <div className='about__chart-time about__chart-grey'>4 недели</div>
                    <span className='about__chart-title'>Back-end</span>
                    <span className='about__chart-title'>Front-end</span>
            </div>
          </div>
        </section>
    );
}
export default AboutProject;