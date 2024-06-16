import TeachersList from '../../components/TeachersList/TeachersList';
import { useGetAllTeachersQuery } from '../../redux/servises';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  const { data } = useGetAllTeachersQuery();
  console.log(data);

  return (
    <section className={css.teachersSection}>
      <div className="container">{data && <TeachersList data={data} />}</div>
    </section>
  );
};

export default TeachersPage;
