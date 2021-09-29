import React from "react";
import './Promo.css'
import banner from '../../images/banner.svg'
function Promo(){
    return(
        <section className='promo'>
          <div className='promo__container common-container'>
              <div className='promo__block'> 
                <h1 className='promo__title'>Учебный проект студента факультета <br className='promo__gap'/>Веб-разработки.</h1>
                <p className='promo__clue'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className='promo__button-more' href='#about'>Узнать больше</a>
             </div>
             <img src={banner} alt='главный банер' className='promo__banner'/>
        </div>
        </section>
    );
}
export default Promo;