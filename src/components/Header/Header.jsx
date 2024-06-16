import { useState } from 'react';
import Logo from '../Logo/Logo';
import Modal from '../../components/Modal/Modal';
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';
import css from './Header.module.css';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onOpenModal = () => {
    setIsModalVisible(true);
  };
  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <div className={css.header}>
        <Logo />
        <Navigation />
        <Registration onOpenModal={onOpenModal} />
      </div>
      {isModalVisible && (
        <Modal onClose={onCloseModal}>
          <RegistrationModal />
        </Modal>
      )}
    </div>
  );
};
