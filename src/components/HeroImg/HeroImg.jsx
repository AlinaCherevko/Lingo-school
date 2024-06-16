import css from './HeroImg.module.css';
import heroImg1x from '../../assets/hero-min-1x.jpg';
import heroImg2x from '../../assets/hero-min-2x.jpg';

const HeroImg = () => {
  return (
    <>
      <picture>
        <source
          srcSet={`${heroImg1x} 1x, ${heroImg2x} 2x`}
          media="(min-width: 320px)"
        />
        <img
          className={css.image}
          src={heroImg1x}
          alt="img-girl"
          width="568"
          height="530"
        />
      </picture>
    </>
  );
};

export default HeroImg;
