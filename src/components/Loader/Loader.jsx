import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <Circles
      height="80"
      width="80"
      color="var( --primary-green-9FBAAE)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
