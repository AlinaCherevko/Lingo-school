import { useState } from 'react';
import CostSelector from '../../components/Selector/CostSelector';
import TeachersList from '../../components/TeachersList/TeachersList';
import { useGetAllTeachersQuery } from '../../redux/servises';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  const { data } = useGetAllTeachersQuery();
  console.log(data);
  const [dataToShow, setDataToShow] = useState(data);
  console.log(dataToShow);

  const filterByPrice = (value) => {
    const filteredAdverts = data.filter(
      (item) => item.price_per_hour === +value
    );
    setDataToShow(filteredAdverts);
    console.log(dataToShow);
  };

  return (
    <section className={css.teachersSection}>
      <div className="container">
        {data && (
          <>
            <div className={css.filters}>
              <CostSelector filterByPrice={filterByPrice} />
            </div>
            <TeachersList data={dataToShow} />
          </>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
