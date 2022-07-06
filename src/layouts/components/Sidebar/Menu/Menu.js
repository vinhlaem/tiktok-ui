import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ children }) {
  return (
    <div>
      <nav className={cx('nav-bars-pc')}>{children}</nav>
      <label for="nav-mobile-input">
        <FontAwesomeIcon className={cx('nav-bars-btn')} icon={faBars} />
      </label>
      <input type="checkbox" hidden className={cx('nav-input')} id="nav-mobile-input" />
      <label for="nav-mobile-input" className={cx('nav-overlay')}></label>
      <nav className={cx('nav-bars-mobile')}>
        <label for="nav-mobile-input" className={cx('nav-bars-mobile-close')}>
          <FontAwesomeIcon icon={faXmark} />
        </label>
        {children}
      </nav>
    </div>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
