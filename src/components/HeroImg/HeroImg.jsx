import css from './HeroImg.module.css';

const HeroImg = () => {
  return (
    <>
      <picture>
        <source
          srcSet="/src/assets/hero-min-1x.jpg 1x, /src/assets/hero-min-2x.jpg 2x"
          media="(min-width: 320px)"
        />
        <img
          className={css.image}
          src="/src/assets/hero-min-1x.jpg"
          alt="img-girl"
          width="568"
          height="530"
        />
      </picture>
    </>
  );
};

export default HeroImg;
