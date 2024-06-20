import Select from 'react-select';
import { useGetAllTeachersQuery } from '../../redux/servises';
import css from './CostSelectors.module.css';

const CostSelector = ({ filterByPrice }) => {
  const { data } = useGetAllTeachersQuery();
  console.log(data);
  const unicPrice = {};
  data.forEach(({ price_per_hour }) => {
    unicPrice[price_per_hour] = true;
  });
  const unicPriceArray = Object.keys(unicPrice);

  const onSelectChange = (selectedOptions) => {
    console.log(selectedOptions.value);
    filterByPrice(selectedOptions.value);
  };
  // Кастомні стилі для плейсхолдера
  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--primary-black-121417)',
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: '500',
    }),
  };
  return (
    <div className={css.filters}>
      <span className={css.text}>Price</span>
      <Select
        className={css.selector}
        classNamePrefix="select"
        onChange={onSelectChange}
        name="price"
        options={
          Array.isArray(unicPriceArray) &&
          unicPriceArray.map((price) => ({
            label: `${price} $`,
            value: price,
          }))
        }
        placeholder={`${unicPriceArray[0]} $`}
        styles={customStyles}
      />
    </div>
  );
};

export default CostSelector;
