import classNames from 'classnames/bind';
import styles from './CardProfile.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function InformationCard() {
  return (
    <div className={cx('wrapper-card')}>
      <div className={cx('padding-top')}>
        <div className={cx('container-card-information')}>
          <div className={cx('container-header')}>
            <Link to={'/@violet'}>
              <Image src={images.violet} alt="violet" className={cx('user-avatar')} />
            </Link>
            <Button className={cx('btn')}>Đang Follow</Button>
          </div>
          <Link className={cx('user-title')} to={'/@violet'}>
            <span>Violet.tnl</span>
          </Link>
          <br />
          <Link className={cx('user-card-nickname')} to={'/@violet'}>
            Thiên violet
          </Link>
          <p className={cx('user-stat')}>
            <span className={cx('user-stat-text')}>1.2M</span>
            <span className={cx('user-stat-follower')}>Follower</span>
            <span className={cx('user-stat-like-count')}>40.8M</span>
            <span className={cx('user-stat-like')}>thích</span>
          </p>
          <p className={cx('user-bio')}>Liên hệ công việc 📩Intargram @Violet.TnT.97 📩 violet.tnt.97@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
