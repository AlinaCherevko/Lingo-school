import { useNavigate } from 'react-router-dom';
import css from './HeroText.module.css';

const HeroText = () => {
  const navigate = useNavigate();
  return (
    <div className={css.heroText}>
      <h1 className={css.title}>
        Unlock your potential with the best
        <span className={css.language}> language</span> tutors
      </h1>
      <p className={css.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <a onClick={() => navigate('/teachers')} className={css.link}>
        Get started
      </a>
    </div>
  );
};

export default HeroText;
