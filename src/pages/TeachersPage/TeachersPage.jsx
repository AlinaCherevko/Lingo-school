// import { useEffect, useState } from 'react';
// import TeachersList from '../../components/TeachersList/TeachersList';
// import { useGetAllTeachersQuery } from '../../redux/servises';
// import LanguageSelector from '../../components/Selector/LanguageSelector/LanguageSelector';
// import CostSelector from '../../components/Selector/CostSelector/CostSelector';
// import LevelSelector from '../../components/Selector/LevelSelector/LevelSelector';
// import css from './TeachersPage.module.css';

// const TeachersPage = () => {
//   const { data, isLoading } = useGetAllTeachersQuery();
//   const [dataToShow, setDataToShow] = useState([]);
//   const [visibleItemsCount, setVisibleItemsCount] = useState(4);
//   const itemsPerPage = 4;
//   console.log(visibleItemsCount);

//   useEffect(() => {
//     if (data) {
//       setDataToShow(data.slice(0, visibleItemsCount));
//     }
//   }, [data]);

//   const filterByPrice = (value) => {
//     const filteredAdverts = dataToShow.filter(
//       (item) => item.price_per_hour === +value
//     );
//     setDataToShow(filteredAdverts.slice(0, visibleItemsCount));
//   };

//   const filterByLanguage = (lang) => {
//     const filteredAdvertsByLanguage = dataToShow.filter((item) =>
//       item.languages.includes(lang)
//     );
//     setDataToShow(filteredAdvertsByLanguage.slice(0, visibleItemsCount));
//   };

//   const filterByLevel = (level) => {
//     const filteredAdvertsByLevel = dataToShow.filter((item) =>
//       item.levels.includes(level)
//     );
//     setDataToShow(filteredAdvertsByLevel.slice(0, visibleItemsCount));
//   };

//   const onloadMore = () => {
//     setVisibleItemsCount((prevState) => prevState + itemsPerPage);
//     console.log(visibleItemsCount);
//   };
//   return (
//     <section className={css.teachersSection}>
//       <div className="container">
//         {data && (
//           <>
//             <div className={css.filters}>
//               <LevelSelector filterByLevel={filterByLevel} />
//               <LanguageSelector filterByLanguage={filterByLanguage} />
//               <CostSelector filterByPrice={filterByPrice} />
//             </div>
//             <TeachersList data={dataToShow} />
//             <button className={css.button} type="button" onClick={onloadMore}>
//               Load more
//             </button>
//             {dataToShow.length > 0 ||
//               (!isLoading && <p>No any matches for your request</p>)}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TeachersPage;

import { useEffect, useState } from 'react';
import TeachersList from '../../components/TeachersList/TeachersList';
import { useGetAllTeachersQuery } from '../../redux/servises';
import LanguageSelector from '../../components/Selector/LanguageSelector/LanguageSelector';
import CostSelector from '../../components/Selector/CostSelector/CostSelector';
import LevelSelector from '../../components/Selector/LevelSelector/LevelSelector';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  const { data, isLoading } = useGetAllTeachersQuery();
  const [dataToShow, setDataToShow] = useState([]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(4);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    if (data) {
      setFilteredData(data);
      setDataToShow(data.slice(0, visibleItemsCount));
    }
  }, [data]);

  useEffect(() => {
    setDataToShow(filteredData.slice(0, visibleItemsCount));
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
            {dataToShow.length === visibleItemsCount && (
              <button className={css.button} type="button" onClick={onloadMore}>
                Load more
              </button>
            )}
            {dataToShow.length > 0 ||
              (!isLoading && <p>No any matches for your request</p>)}
          </>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
