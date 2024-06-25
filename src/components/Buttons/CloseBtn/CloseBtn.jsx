import css from './CloseBtn.module.css';
const CloseBtn = ({ onClose }) => {
  return (
    <div>
      <img
        onClick={onClose}
        src="./close.svg"
        alt="close-icon"
        className={css.closeBtn}
      />
    </div>
  );
};

export default CloseBtn;
