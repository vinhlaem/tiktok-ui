import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Modal from './components/Modal';
import Styles from './Informations.module.scss';
import YourVideo from './components/YourVideo';
import VideoLike from './components/VideoLike';
import { EditIcon, ShareOutlineIcon, LockIcon } from '~/components/Icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const cx = classNames.bind(Styles);

function Informations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('Vinh Trương');
  const [biouser, setBioUser] = useState('Chưa có tiểu sử');
  const [username, setUserName] = useState('Vinhsooo');
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content-infomation')}>
        <div className={cx('information')}>
          <div className={cx('container-info')}>
            <div className={cx('container-avt')}>
              <Image
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/270082060_1294703671002480_6063407352322219179_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o25jNg-n1S4AX94vfAr&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-SYkIbjyZQ28L1A_ibRHdVrzRslXIIdqv-4q1Vq3y7bQ&oe=62CB83E9"
                alt="vinhssooo"
                className={cx('user-avatar')}
              />
            </div>
            <div className={cx('container-name')}>
              <h2 className={cx('user-name')}>{username}</h2>
              <h1 className={cx('name')}>{name}</h1>
              <div className={cx('continer-btn')}>
                <Button
                  leftIcon={<EditIcon />}
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  className={cx('btn')}
                  outline
                >
                  Sửa hồ sơ
                </Button>
              </div>
            </div>
          </div>
          <h2 className={cx('count-info')}>
            <div className={cx('count')}>
              <strong>69</strong>
              <span className={cx('span')}>Đang Follow</span>
            </div>
            <div className={cx('count')}>
              <strong>1</strong>
              <span className={cx('span')}>Follower</span>
            </div>
            <div className={cx('count')}>
              <strong>0</strong>
              <span className={cx('span')}>Thích</span>
            </div>
          </h2>
          <h2 className={cx('user-bio')}>{biouser}</h2>
          <div className={cx('share')}>
            <ShareOutlineIcon />
          </div>
        </div>
      </div>
      <div className={cx('container-video-tab')}>
        <Tabs>
          <TabList className={cx('tab-list')}>
            <Tab className={cx('tab')}>Video</Tab>
            <Tab className={cx('tab')}>
              <LockIcon className={cx('icon')} />
              Đã thích
            </Tab>
          </TabList>
          <TabPanel>
            <YourVideo />
          </TabPanel>
          <TabPanel>
            <VideoLike />
          </TabPanel>
        </Tabs>
      </div>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} setUserBio={setBioUser} setUserName={setUserName} setname={setName} />
      )}
    </div>
  );
}

export default Informations;
