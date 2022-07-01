import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

function Button({
  to,
  href,
  children,
  onClick,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  rounded = false,
  className,
  rightIcon,
  leftIcon,
  ...passProps
}) {
  let Component = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    delete props.onClick;
  }
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    disable,
    large,
    text,
    rounded,

    [className]: className,
  });
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  text: PropTypes.bool,
  disable: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
};

export default Button;
