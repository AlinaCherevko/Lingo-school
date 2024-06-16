import css from './TeachersItem.module.css';

const TeachersItem = ({ item }) => {
  return (
    <div className={css.teacherItem}>
      <div className={css.imgWrapper}>
        <img className={css.image} src={item.avatar_url} alt={item.name} />
      </div>
      <div>
        <div className={css.textWrapper}>
          <p className={css.languages}>Languages</p>
          <ul className={css.list}>
            <li className={css.item}>Lessons online</li>
            <li className={css.item}>Lessons done: {item.lessons_done}</li>
            <li className={css.item}>Rating: {item.rating}</li>
            <li className={css.item}>Price / 1 hour: {item.price_per_hour}$</li>
          </ul>
        </div>
        <h2 className={css.name}>
          {item.name} {item.surname}
        </h2>
        <div className={css.optionsWrapper}>
          <div className={css.languageWrapper}>
            <span className={css.languages}>Speaks: </span>
            <ul className={css.languageList}>
              {item.languages.map((language) => (
                <li className={css.languageItem} key={language}>
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.languageWrapper}>
            <span className={css.languages}>Lesson Info: </span>
            <span className={css.languageItem}>{item.lesson_info}</span>
          </div>
          <div className={css.languageWrapper}>
            <span className={css.languages}>Conditions: </span>
            <span className={css.languageItem}>{item.conditions}</span>
          </div>
        </div>
        <button className={css.button}>Read more</button>
      </div>
    </div>
  );
};

export default TeachersItem;
