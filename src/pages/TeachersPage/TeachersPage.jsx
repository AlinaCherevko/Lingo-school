import { useEffect, useState } from 'react';
import TeachersList from '../../components/TeachersList/TeachersList';
import { useGetAllTeachersQuery } from '../../redux/servises';
import LanguageSelector from '../../components/Selector/LanguageSelector/LanguageSelector';
import CostSelector from '../../components/Selector/CostSelector/CostSelector';
import LevelSelector from '../../components/Selector/LevelSelector/LevelSelector';
import css from './TeachersPage.module.css';
import LoadingSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const TeachersPage = () => {
  const { data, isLoading } = useGetAllTeachersQuery();
  const [dataToShow, setDataToShow] = useState([]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(4);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    if (data) {
      setFilteredData(data);
      setDataToShow(data.slice(0, visibleItemsCount));
    }
  }, [data]);

  useEffect(() => {
    if (filteredData.length > 0) {
      setDataToShow(filteredData.slice(0, visibleItemsCount));
      setIsLoadingMore(false); // Зупиняємо індикатор завантаження
    }
  }, [visibleItemsCount, filteredData]);

  const filterByPrice = (value) => {
    const filteredAdverts = data.filter(
      (item) => item.price_per_hour === +value
    );
    setFilteredData(filteredAdverts);
    setDataToShow(filteredAdverts.slice(0, visibleItemsCount));
  };

  const filterByLanguage = (lang) => {
    const filteredAdvertsByLanguage = data.filter((item) =>
      item.languages.includes(lang)
    );
    setFilteredData(filteredAdvertsByLanguage);
    setDataToShow(filteredAdvertsByLanguage.slice(0, visibleItemsCount));
  };

  const filterByLevel = (level) => {
    const filteredAdvertsByLevel = data.filter((item) =>
      item.levels.includes(level)
    );
    setFilteredData(filteredAdvertsByLevel);
    setDataToShow(filteredAdvertsByLevel.slice(0, visibleItemsCount));
  };

  const onloadMore = () => {
    setIsLoadingMore(true); // Починаємо індикатор завантаження
    setVisibleItemsCount((prevState) => prevState + itemsPerPage);
  };

  return (
    <section className={css.teachersSection}>
      <div className="container">
        {data && (
          <>
            <div className={css.filters}>
              <LevelSelector filterByLevel={filterByLevel} />
              <LanguageSelector filterByLanguage={filterByLanguage} />
              <CostSelector filterByPrice={filterByPrice} />
            </div>
            <TeachersList data={dataToShow} />
            <button className={css.button} type="button" onClick={onloadMore}>
              {isLoadingMore ? <LoadingSpinner /> : 'Load more'}
            </button>
            {dataToShow.length > 0 ||
              (!isLoading && <p>No any matches for your request</p>)}
          </>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
