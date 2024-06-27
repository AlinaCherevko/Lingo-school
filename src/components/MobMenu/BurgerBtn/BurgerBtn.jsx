import css from './BurgerBtn.module.css';
const BurgerBtn = ({ onOpen }) => {
  return (
    <div>
      <img
        onClick={onOpen}
        className={css.burgerBtn}
        src="./burger-menu.svg"
        alt="burger-btn"
        loading="lazy"
      />
    </div>
  );
};

export default BurgerBtn;
