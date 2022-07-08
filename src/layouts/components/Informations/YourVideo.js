import classNames from 'classnames/bind';
import Styles from './Informations.module.scss';

import { UserIcon } from '~/components/Icons';
const cx = classNames.bind(Styles);
function YourVideo() {
  return (
    <div className={cx('wrapper-your-video')}>
      <div className={cx('container-your-video')}>
        <UserIcon className={cx('icon-user')} />
        <p className={cx('text')}>Tải video đầu tiên của bạn lên</p>
        <p className={cx('sub-text')}>Video của bạn sẽ xuất hiện tại đây</p>
      </div>
    </div>
  );
}

export default YourVideo;
