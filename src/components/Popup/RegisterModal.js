import classNames from 'classnames/bind';
import Styles from './RegisterModal.module.scss';
import { UserIcon, FacebookIcon, GoogleIcon, TwitterIcon, LineIcon, KakaoTalk, CloseIcon } from '~/components/Icons';
import Button from '../Button';

const cx = classNames.bind(Styles);

function Modal({ setOpenRegisterModal, setOpenLoginModal }) {
  return (
    <div className={cx('modal-background')}>
      <div className={cx('modal-container')}>
        <div className={cx('header-modal')}>
          <div className={cx('title-closeBtn')}>
            <button
              className={cx('btn')}
              onClick={() => {
                setOpenRegisterModal(false);
                setOpenLoginModal(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={cx('body-modal')}>
          <div className={cx('container-body-modal')}>
            <div className={cx('title-body-modal')}>Đăng ký TikTok</div>

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
          </div>
          <div className={cx('agreement')}>
            <p className={cx('text-agreement')}>
              Bằng cách tiếp tục, bạn đồng ý với{' '}
              <Button className={cx('btn-agreement')} text>
                Điều khoảng sử dụng
              </Button>{' '}
              của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
              <Button className={cx('btn-agreement')} text>
                Chính sách quyền riêng tư
              </Button>{' '}
              của TikTok.
            </p>
          </div>
        </div>
        <div className={cx('footer-modal')}>
          <div>
            Bạn đã có tài khoản?{' '}
            <Button
              className={cx('btn-register')}
              onClick={() => {
                setOpenRegisterModal(false);
              }}
              text
            >
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
