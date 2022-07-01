import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button onClick={onBack} className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}
HeaderMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
