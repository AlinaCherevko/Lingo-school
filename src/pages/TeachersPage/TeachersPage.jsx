import { useState } from 'react';

import TeachersList from '../../components/TeachersList/TeachersList';
import { useGetAllTeachersQuery } from '../../redux/servises';
import LanguageSelector from '../../components/Selector/LanguageSelector/LanguageSelector';
import css from './TeachersPage.module.css';
import CostSelector from '../../components/Selector/CostSelector/CostSelector';

const TeachersPage = () => {
  const { data } = useGetAllTeachersQuery();
  const [dataToShow, setDataToShow] = useState(data);

  const filterByPrice = (value) => {
    const filteredAdverts = data.filter(
      (item) => item.price_per_hour === +value
    );
    setDataToShow(filteredAdverts);
  };

  const filterByLanguage = (lang) => {
    const filteredAdvertsByLanguage = data.filter((item) =>
      item.languages.includes(lang)
    );

    setDataToShow(filteredAdvertsByLanguage);
  };

  return (
    <section className={css.teachersSection}>
      <div className="container">
        {data && (
          <>
            <div className={css.filters}>
              <LanguageSelector filterByLanguage={filterByLanguage} />
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
