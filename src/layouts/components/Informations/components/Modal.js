import classNames from 'classnames/bind';
import Styles from './Modal.module.scss';
import Image from '~/components/Image';
import { CheckIcon, EditIcon } from '~/components/Icons';

import { useState } from 'react';
const cx = classNames.bind(Styles);

function Modal({ setOpenModal, setUserBio, setUserName, setname }) {
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('vinhsooo');
  const [name, setName] = useState('Vinh Trương');
  const [image, setImage] = useState(
    'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/270082060_1294703671002480_6063407352322219179_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o25jNg-n1S4AX94vfAr&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-SYkIbjyZQ28L1A_ibRHdVrzRslXIIdqv-4q1Vq3y7bQ&oe=62CB83E9',
  );

  const handleSave = () => {
    setUserBio(bio);
    setname(name);
    setUserName(username);
    setOpenModal(false);
  };

  return (
    <div className={cx('modal-background')}>
      <div className={cx('modal-container')}>
        <div className={cx('header-modal')}>
          Sửa hồ sơ
          <div className={cx('title-closeBtn')}>
            <button
              className={cx('btn')}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
        </div>
        <div className={cx('body-modal')}>
          <div className={cx('update-avt')}>
            <div className={cx('edit-avt')}>Ảnh hồ sơ</div>
            <div className={cx('avt-content')}>
              <div className={cx('container-style-image')}>
                <span className={cx('container-span-image')}>
                  <Image src={image} alt="vinhssooo" className={cx('user-avatar')} />
                </span>
              </div>
              <div className={cx('edit-profile-icon')}>
                <EditIcon width="1.8rem" height="1.8rem" />

                <input className={cx('upload-img')} type="file" />
              </div>
            </div>
          </div>
          <div className={cx('container-edit-username')}>
            <div className={cx('edit-username')}>TikTok ID</div>
            <div className={cx('edit-username-input')}>
              <input className={cx('input-text')} value={username} onChange={(e) => setUsername(e.target.value)} />
              <CheckIcon className={cx('check-icon')} />
              <p className={cx('edit-profile-link')}>www.tiktok.com/@vinhsooo</p>
              <p className={cx('edit-profile-tip')}>
                TikTok ID chỉ có thể bao gồm chữ cái, chữ số, dấu gạch dưới và dấu chấm. Khi thay đổi TikTok ID, liên
                kết hồ sơ của bạn cũng sẽ thay đổi.
              </p>
            </div>
          </div>
          <div className={cx('container-edit-name')}>
            <div className={cx('edit-name')}>Tên</div>
            <div className={cx('edit-name-input')}>
              <input className={cx('input-name-text')} value={name} onChange={(e) => setName(e.target.value)} />
              <CheckIcon className={cx('check-name-icon')} />
            </div>
          </div>
          <div className={cx('container-edit-bio')}>
            <div className={cx('edit-bio')}>Tiểu sử</div>
            <div className={cx('edit-bio-input')}>
              <textarea
                className={cx('edit-text-bio')}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tiểu sử"
              />
              <div className={cx('count-text')}>
                <span>{bio.length}/</span>80
              </div>
            </div>
          </div>
        </div>
        <div className={cx('footer-modal')}>
          <button
            className={cx('btn-cancel')}
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Hủy
          </button>
          <button onClick={handleSave} disabled={!bio} className={cx('btn-save')}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
