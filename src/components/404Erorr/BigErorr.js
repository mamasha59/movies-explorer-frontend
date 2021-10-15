import './BigEror.css';
import { Link } from 'react-router-dom';
function BigEror() {
  return (
    <section className='error'>

        <p className='error__title'>404</p>
        <article className='error__subtitle'>Страница не найдена</article>
        <Link className='error_back' to='/'>Назад</Link>
    </section>
  );
}

export default BigEror;
