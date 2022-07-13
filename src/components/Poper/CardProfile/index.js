import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './CardProfile.module.scss';
import InformationCard from './Informationcard';

import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function CardProfile({ children, items = [], hideOnClick = false, onChange = defaultFn, placement, ...passprops }) {
  const renderItems = () => {
    return <InformationCard />;
  };

  return (
    <Tippy
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom"
      render={renderItems}
    >
      {children}
    </Tippy>
  );
}

export default CardProfile;
