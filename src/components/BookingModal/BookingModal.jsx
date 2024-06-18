import BookingForm from '../BookingForm/BookingForm';
import css from './BookingModal.module.css';

const BookingModal = ({ item }) => {
  return (
    <div className={css.modal}>
      <h2 className={css.title}>Book trial lesson</h2>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.imageWrapper}>
        <img className={css.image} src={item.avatar_url} alt="teacher" />
        <div>
          <p className={css.yourTeacher}>Your teacher</p>
          <p className={css.name}>
            {item.name} {item.surname}
          </p>
        </div>
      </div>
      <h3 className={css.mainReason}>
        What is your main reason for learning English?
      </h3>
      <BookingForm />
    </div>
  );
};

export default BookingModal;
