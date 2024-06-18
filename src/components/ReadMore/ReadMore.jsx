import css from './ReadMore.module.css';

const ReadMore = ({ item, setIsVisibleModal }) => {
  //const [isVisibleModal, setIsVisibleModal] = useState(false);

  const openBookingModal = () => {
    setIsVisibleModal(true);
  };
  return (
    <div>
      <ul className={css.list}>
        {item.reviews.map((review) => (
          <li className={css.item} key={review.comment}>
            <div className={css.wrapper}>
              <div className={css.image}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.textWrapper}>
                <span className={css.name}>{review.reviewer_name}</span>
                <div className={css.ratingWrapper}>
                  <img src="/Lingo-school/star.svg" alt="star" />
                  <span className={css.rating}>{review.reviewer_rating}.0</span>
                </div>
              </div>
            </div>
            <p className={css.comments}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <ul className={css.btnList}>
        {item.levels.map((level, index) => (
          <li className={css.levelItem} key={index}>
            {level}
          </li>
        ))}
      </ul>
      <button onClick={openBookingModal} className={css.button}>
        Book trial lesson
      </button>
    </div>
  );
};

export default ReadMore;
