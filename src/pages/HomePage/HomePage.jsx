import HeroImg from '../../components/HeroImg/HeroImg';
import HeroText from '../../components/HeroText/HeroText';
import css from './HomePage.module.css';

const HomePage = () => {
  const advantagesList = [
    { id: '1', content: '32,000 +', text: 'Experienced tutors' },
    { id: '2', content: '300,000 +', text: '5-star tutor reviews' },
    { id: '3', content: '120 +', text: 'Subjects taught' },
    { id: '4', content: '200 +', text: 'Tutor nationalities' },
  ];

  return (
    <>
      <section className={css.sectionHero}>
        <div className="container">
          <div className={css.heroWrapper}>
            <HeroText />
            <HeroImg />
          </div>
        </div>
      </section>
      <section className={css.advantages}>
        <div className="container">
          <ul className={css.advantagesList}>
            {advantagesList.map(({ id, content, text }) => (
              <li className={css.advantageItem} key={id}>
                <span className={css.content}>{content}</span>
                <span className={css.text}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
