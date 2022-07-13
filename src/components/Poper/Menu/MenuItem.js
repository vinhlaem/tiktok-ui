import Button from '~/components/Button';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
    center: data.center,
  });
  return (
    <Button className={cx(classes)} leftIcon={data.icon} to={data.to} href={data.href} onClick={onClick}>
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
