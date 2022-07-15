import classNames from 'classnames/bind';
import Styles from './LoginModal.module.scss';
import {
  QRIcon,
  UserIcon,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
  LineIcon,
  KakaoTalk,
  AppleIcon,
  InstagramIcon,
  CloseIcon,
} from '~/components/Icons';
import Button from '../Button';
import { useState } from 'react';
import RegisterModal from './RegisterModal';

const cx = classNames.bind(Styles);

function LoginModal({ setOpenLoginModal }) {
  const [registermodalOpen, setRegisterModalOpen] = useState(false);
  return (
    <div className={cx('modal-background')}>
      <div className={cx('modal-container')}>
        <div className={cx('header-modal')}>
          <div className={cx('title-closeBtn')}>
            <button
              className={cx('btn')}
              onClick={() => {
                setOpenLoginModal(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={cx('body-modal')}>
          <div className={cx('container-body-modal')}>
            <div className={cx('title-body-modal')}>Đăng nhập vào TikTok</div>

            <Button className={cx('button')} leftIcon={<QRIcon className={cx('icon')} />} loginbtn>
              Sử dụng mã QR
            </Button>
            <Button className={cx('button')} leftIcon={<UserIcon className={cx('icon')} />} loginbtn>
              Số điện thoại / Email / TikTok ID
            </Button>
            <Button className={cx('button')} leftIcon={<FacebookIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với Facebook
            </Button>
            <Button className={cx('button')} leftIcon={<GoogleIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với Google
            </Button>
            <Button className={cx('button')} leftIcon={<TwitterIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với Twitter
            </Button>
            <Button className={cx('button')} leftIcon={<LineIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với LINE
            </Button>
            <Button className={cx('button')} leftIcon={<KakaoTalk className={cx('icon')} />} loginbtn>
              Tiếp tục với KakaoTalk
            </Button>
            <Button className={cx('button')} leftIcon={<AppleIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với Apple
            </Button>
            <Button className={cx('button')} leftIcon={<InstagramIcon className={cx('icon')} />} loginbtn>
              Tiếp tục với Instagram
            </Button>
          </div>
        </div>
        <div className={cx('footer-modal')}>
          <div>
            Bạn không có tài khoản?{' '}
            <Button
              className={cx('btn-register')}
              onClick={() => {
                setRegisterModalOpen(true);
              }}
              text
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
      {registermodalOpen && (
        <RegisterModal setOpenRegisterModal={setRegisterModalOpen} setOpenLoginModal={setOpenLoginModal} />
      )}
    </div>
  );
}

export default LoginModal;
