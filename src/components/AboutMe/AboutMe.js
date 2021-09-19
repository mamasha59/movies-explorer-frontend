import './AboutMe.css'
import logstudento from '../../images/student.svg'
function AboutMe(){
    return(
     <section className='aboutme'>
         <div className='aboutme__container common-container'>
             <p className='aboutme__episode common-title-episode'>Студент</p>
            <div className='aboutme__info'>
             <div className='aboutme__about'>
                 <h2 className="aboutme__title">Алексей</h2>
                 <h3 className='aboutme__subtitle'>Фронтенд-разработчик, 25 лет</h3>
                 <p className='aboutme__description'>Я родился в РБ г.Стерлитамак, живу в Москве. Я люблю смотреть сериалы и фильмы про далекий и ближний космос, а ещё занимаюсь спортом. Люблю верстать и искать необычные решения. 10 месяцев назад начал кодить. Было сложовато но я успешно сдавал все проекты. Я продолжаю и дальше учиться и ищу работу для начинающего фронтенд разработчика.</p>
              <div className='aboutme__social'>
                 <a href='https://facebook.com/profile.php?id=100010891502668' className='aboutme__page' target='_blank' rel='noreferrer'>Facebook</a>
                 <a href='https://github.com/mamasha59' className='aboutme__page' target='_blank' rel='noreferrer'>Github</a>
              </div>
             </div>
             <img src={logstudento} alt='фото студента' className='aboutme__photo'></img>
            </div>
            <div className='aboutme-portfolio'>
                <h4 className='aboutme-portfolio__title'>Портфолио</h4>
                <div className='aboutme-portfolio__works'>
                    <a className='aboutme-portfolio__link' href='https://mamasha59.github.io/mesto/' target='_blank' rel='noreferrer'>Статичный сайт</a>
                    <a className='aboutme-portfolio__link' href='https://russian-travel-lime.vercel.app/' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    <a className='aboutme-portfolio__link' href='https://how-to-learn-five.vercel.app/' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                </div>
            </div>
         </div>
     </section>
    );
}
export default AboutMe;