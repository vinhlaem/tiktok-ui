import { useEffect, useRef } from 'react';
import Content from '~/layouts/components/Content';
import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);

function Home() {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.focus();
  }, []);
  return (
    <div ref={contentRef} className={cx('wrapper')}>
      <Content />
      <Content />
      <Content />
      <Content />
    </div>
  );
}

export default Home;
