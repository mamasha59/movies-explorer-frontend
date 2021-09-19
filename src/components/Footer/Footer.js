import './Footer.css'
function Footer(){
    return(
     <footer className='footer'>
         <div className='footer__container common-container'>
             <h5 className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</h5>
             <div className='footer__block'>
                 <div className='footer__date'>© {new Date().getFullYear()}</div>
                 <div className='footer__links'>
                     <a href='https://practicum.yandex.ru' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                     <a href='https://github.com/mamasha59' className='footer__link' target='_blank' rel='noreferrer'>Github</a>
                     <a href='https://facebook.com/profile.php?id=100010891502668' className='footer__link' target='_blank' rel='noreferrer'>Facebook</a>
                 </div>
             </div>
         </div>
     </footer>
    );
}
export default Footer;