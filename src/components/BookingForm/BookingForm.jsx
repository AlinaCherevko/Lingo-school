import { useState } from 'react';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { label: 'Career and business' },
    { label: 'Lesson for kids' },
    { label: 'Living abroad' },
    { label: 'Exams and coursework' },
    { label: 'Culture, travel or hobby' },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <ul className={css.list}>
        {options.map((option) => (
          <li key={option.label} className={css.radioItem}>
            <input
              type="radio"
              id={option.label}
              name="radioGroup"
              className={css.radio}
              value={option.label}
              checked={selectedOption === option.label}
              onChange={handleOptionChange}
            />
            <label htmlFor={option.label} className={css.label}>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingForm;
