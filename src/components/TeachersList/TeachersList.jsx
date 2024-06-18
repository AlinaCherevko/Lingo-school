//import { useState } from 'react';
import TeachersItem from '../TeachersItem/TeachersItem';
import css from './TeachersList.module.css';
//import Modal from '../Modal/Modal';
//import BookingModal from '../BookingModal/BookingModal';

const TeachersList = ({ data }) => {
  //   const [isVisibleModal, setIsVisibleModal] = useState(false);
  //   console.log(isVisibleModal);

  //   const onClose = () => {
  //     setIsVisibleModal(false);
  //   };
  return (
    <>
      <div className={css.list}>
        {data.map((item) => (
          <TeachersItem
            key={item.id}
            item={item}
            // setIsVisibleModal={setIsVisibleModal}
          />
        ))}
      </div>
      {/* {isVisibleModal && (
        <Modal onClose={onClose}>
          <BookingModal item={item} />
        </Modal>
      )} */}
    </>
  );
};

export default TeachersList;
