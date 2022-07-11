import classNames from 'classnames/bind';
import Styles from './Modal.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(Styles);

function Modal({ setOpenModal }) {
  return (
    <div className={cx('modalBackground')}>
      <div className={cx('modalContainer')}>
        <div className={cx('titleCloseBtn')}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={cx('title')}>
          <h1>Sửa hồ sơ</h1>
        </div>
        <div className={cx('body')}>
          <div className={cx('container-edit-avt')}>
            <div>Ảnh hồ sơ</div>
            <div className={cx('avt')}>
              {' '}
              <Image
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/270082060_1294703671002480_6063407352322219179_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o25jNg-n1S4AX94vfAr&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-SYkIbjyZQ28L1A_ibRHdVrzRslXIIdqv-4q1Vq3y7bQ&oe=62CB83E9"
                alt="vinhssooo"
                className={cx('user-avatar')}
              />
            </div>
          </div>
        </div>
        <div className={cx('footer')}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
